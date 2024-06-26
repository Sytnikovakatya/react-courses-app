import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Form from 'react-bootstrap/Form';
import { Container, InputGroup } from 'react-bootstrap';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import { login } from '../../state/authenticationSlice';
import { clearMessage } from '../../state/messageSlice';

export default function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [email, setUserEmail] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);

	const { message } = useSelector((state) => state.message);

	const submitLogin = (e) => {
		e.preventDefault();
		dispatch(login({ email, password }))
			.unwrap()
			.then(() => {
				navigate('/courses');
			})
			.catch(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		dispatch(clearMessage());
	}, [dispatch]);

	return (
		<>
			<Container fluid='sm' className='w-25'>
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
					<Button
						text={
							<span>
								{loading && (
									<span className='spinner-border spinner-border-sm'></span>
								)}
								Login
							</span>
						}
						type='submit'
					/>
				</Form>
				<p className='mt-5 text-center'>
					If you do not have an account you can{' '}
					<Link to='/registration'>Registration</Link>
				</p>
				{message && (
					<div className='form-group'>
						<div className='alert alert-danger' role='alert'>
							{message}
						</div>
					</div>
				)}
			</Container>
		</>
	);
}
