import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';

import Form from 'react-bootstrap/Form';
import { Container, InputGroup } from 'react-bootstrap';

export default function Registration() {
	return (
		<>
			<Container fluid='sm' className='w-50'>
				<h1 className='pb-5 text-center'>Registration</h1>

				<Form>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
						<Form.Label>Name</Form.Label>
						<InputGroup className='mb-3'>
							<Input
								placeholder='Enter name'
								labelText='username'
								nameInput='User name'
								id='name'
							/>
						</InputGroup>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
						<Form.Label>Email address</Form.Label>
						<InputGroup className='mb-3'>
							<Input
								placeholder='Enter email'
								labelText='email'
								nameInput='User email'
								id='email'
							/>
						</InputGroup>
					</Form.Group>
					<Form.Group className='mb-3' controlId='exampleForm.ControllInput3'>
						<Form.Label>Password</Form.Label>
						<InputGroup className='mb-3'>
							<Input
								placeholder='Enter password'
								labelText='password'
								nameInput='User password'
								id='password'
							/>
						</InputGroup>
					</Form.Group>
				</Form>

				<Button text='Registration' type='submit' />

				<p className='mt-5 text-center'>
					If you have an account you can <Link to='/login'>Login</Link>
				</p>
			</Container>
		</>
	);
}
