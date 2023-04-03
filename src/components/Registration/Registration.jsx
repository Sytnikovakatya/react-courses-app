import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import axios from '../api/axios';

import Header from '../Header/Header';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import Form from 'react-bootstrap/Form';
import { Container, InputGroup } from 'react-bootstrap';

export default function Registration() {
	const [userName, setUserName] = useState('');
	const [userEmail, setUserEmail] = useState('');
	const [password, setPassword] = useState('');

	const navigate = useNavigate();
	const REGISTER_URL = '/register';
	const submitRegistration = async (e) => {
		e.preventDefault();
		const newUser = {
			name: userName,
			email: userEmail,
			password: password,
		};
		try {
			await axios.post(REGISTER_URL, JSON.stringify(newUser), {
				headers: { 'Content-Type': 'application/json' },
			});
			setUserName('');
			setPassword('');
			setUserEmail('');

			navigate('/login');
		} catch (err) {
			if (!err?.response) {
				throw new Error('No Server Response');
			} else if (err.response?.status === 409) {
				throw new Error('Username Taken');
			} else {
				throw new Error('Registration Failed');
			}
		}
	};
	return (
		<>
			<Header />
			<Container fluid='sm' className='w-50'>
				<h1 className='pb-5 text-center'>Registration</h1>
				<Form onSubmit={submitRegistration}>
					<Form.Group className='mb-3'>
						<Form.Label>Name</Form.Label>
						<InputGroup className='mb-3'>
							<Input
								placeholder='Enter name'
								labelText='username'
								nameInput='User name'
								id='name'
								onChange={(e) => setUserName(e.target.value)}
							/>
						</InputGroup>
					</Form.Group>
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
					<Button text='Registration' type='submit' />
				</Form>
				<p className='mt-5 text-center'>
					If you have an account you can <Link to='/login'>Login</Link>
				</p>
			</Container>
		</>
	);
}
