import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function Example() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				Launch demo modal
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Registration</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Name</Form.Label>
							<Form.Control
								type='username'
								placeholder='Enter name'
								autoFocus
							/>
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput2'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' autoFocus />
						</Form.Group>
						<Form.Group className='mb-3' controlId='exampleForm.ControllInput3'>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type='password'
								placeholder='Enter password'
								autoFocus
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='primary' onClick={handleClose}>
						Registration
					</Button>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
				</Modal.Footer>
				<p className='text-center'>
					If you have an account you can <a href='#Login'>Login</a>
				</p>
			</Modal>
		</>
	);
}
