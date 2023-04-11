import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Header from '../Header/Header';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import Form from 'react-bootstrap/Form';
import { Container, InputGroup } from 'react-bootstrap';

import { register } from '../../features/authSlice';
import { clearMessage } from '../../features/messageSlice';

export default function Registration() {
	const [name, setUserName] = useState('');
	const [email, setUserEmail] = useState('');
	const [password, setPassword] = useState('');
	const [successful, setSuccessful] = useState(false);

	const navigate = useNavigate();

	const { message } = useSelector((state) => state.message);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

	const submitRegistration = (e) => {
		e.preventDefault();
		setSuccessful(false);

		dispatch(register({ name, email, password }))
			.unwrap()
			.then(() => {
				setSuccessful(true);
				navigate('/login');
			})
			.catch(() => {
				setSuccessful(false);
			});
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

				{message && (
					<div className='form-group'>
						<div
							className={
								successful ? 'alert alert-success' : 'alert alert-danger'
							}
							role='alert'
						>
							{message}
						</div>
					</div>
				)}
			</Container>
		</>
	);
}
