import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';

import './Login.css';
import Form from 'react-bootstrap/Form';
import { Container, InputGroup } from 'react-bootstrap';

import axios from '../api/axios';

import Header from '../Header/Header';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

export default function Login() {
	const { setItem } = useLocalStorage();
	const navigate = useNavigate();
	const errRef = useRef();

	const [userEmail, setUserEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errMsg, setErrMsg] = useState('');

	const LOGIN_URL = '/login';

	const submitLogin = async (e) => {
		e.preventDefault();
		const userCredentials = {
			email: userEmail,
			password: password,
		};
		try {
			const response = await axios.post(
				LOGIN_URL,
				JSON.stringify(userCredentials),
				{
					headers: { 'Content-Type': 'application/json' },
				}
			);
			const userName = response?.data.user.name;
			setItem('name', userName);
			setItem('authenticated', true);

			setUserEmail('');
			setPassword('');

			navigate('/courses');
		} catch (err) {
			if (!err?.response) {
				setErrMsg('No Server Response');
				setItem('authenticated', false);
			} else if (err.response?.status === 400) {
				setErrMsg('Missing Username or Password');
				setItem('authenticated', false);
			} else {
				setErrMsg('Login Failed');
				setItem('authenticated', false);
			}
			errRef.current.focus();
		}
	};

	return (
		<>
			<Header />
			<Container fluid='sm' className='w-25'>
				<p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'}>
					{errMsg}
				</p>
				<h1 className='pb-5 text-center'>Login</h1>
				<Form onSubmit={submitLogin}>
					<Form.Group className='mb-3'>
						<Form.Label>Email address</Form.Label>
						<InputGroup className='mb-3'>
							<Input
								placeholder='Enter email'
								labelText='email'
								nameInput='User email'
								id='email'
								onChange={(e) => setUserEmail(e.target.value)}
							/>
						</InputGroup>
					</Form.Group>
					<Form.Group className='mb-3'>
						<Form.Label>Password</Form.Label>
						<InputGroup className='mb-3'>
							<Input
								placeholder='Enter password'
								labelText='password'
								nameInput='User password'
								id='password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</InputGroup>
					</Form.Group>
					<Button text='Login' type='submit' />
				</Form>
				<p className='mt-5 text-center'>
					If you do not have an account you can{' '}
					<Link to='/registration'>Registration</Link>
				</p>
			</Container>
		</>
	);
}
