import React, { useState } from 'react';
import './CreateCourse.css';

import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';

import {
	Form,
	FloatingLabel,
	Container,
	Row,
	Col,
	InputGroup,
	ListGroup,
} from 'react-bootstrap';

const CreateCourse = ({ onClick }) => {
	const [inputText, setInputText] = useState('');
	const [characterLimit] = useState(2);
	const handleChange = (event) => {
		setInputText(event.target.value);
	};
	return (
		<>
			<Container className='create-course shadow'>
				<Container fluid='md' className='p-4'>
					<Row>
						<Col md={{ span: 5, offset: 0 }}>
							<Form.Label htmlFor='title'>Title</Form.Label>
							<InputGroup className='mb-3'>
								<Input
									placeholder='Enter title'
									type='text'
									name='Title'
									id='title'
								/>
							</InputGroup>
						</Col>
						<Col md={{ span: 3, offset: 4 }}>
							<Button text='Create course' type='submit' />
							<Button text='Close' type='submit' onClick={onClick} />
						</Col>
					</Row>
					<Row>
						<Col>
							<p>Description</p>
							<FloatingLabel
								controlId='floatingTextarea'
								label='Enter description'
							>
								<Form.Control
									as='textarea'
									value={inputText}
									onChange={handleChange}
									isInvalid={inputText.length < characterLimit}
									placeholder='Enter description'
									style={{ height: '100px' }}
								/>
							</FloatingLabel>
						</Col>
					</Row>
				</Container>
				<Container fluid='md' className='mb-3 p-5 shadow border'>
					<Row className='g-5'>
						<Col className='me-3'>
							<h2>Add authors</h2>
							<Form.Label htmlFor='name'>Author name</Form.Label>
							<InputGroup className='mb-3'>
								<Input
									placeholder='Enter author name...'
									type='text'
									name='Author name'
									id='name'
								/>
							</InputGroup>
							<Button text='Create author' type='submit' />
						</Col>
						<Col>
							<h2 className='text-center'>Authors</h2>
							<ListGroup>
								<ListGroup.Item className='authors-list'>
									<div className='fw-bold'>Vasiliy Dobkin</div>{' '}
									<Button text='Add author' type='submit' />
								</ListGroup.Item>
								<ListGroup.Item className='authors-list '>
									<div className='fw-bold'>Nikolas Kim</div>{' '}
									<Button text='Add author' type='submit' />
								</ListGroup.Item>
								<ListGroup.Item className='authors-list '>
									<div className='fw-bold'>Ann Sidorenko</div>{' '}
									<Button text='Add author' type='submit' />
								</ListGroup.Item>
								<ListGroup.Item className='authors-list'>
									<div className='fw-bold'>Valentina Larina</div>{' '}
									<Button text='Add author' type='submit' />
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
					<Row className='mt-4 g-5'>
						<Col>
							<h2>Duration</h2>
							<Form.Label htmlFor='duration'>Duration</Form.Label>
							<InputGroup className='mb-3'>
								<Input
									placeholder='Enter duration in minutes...'
									type='number'
									name='Duration'
									id='duration'
								/>
							</InputGroup>

							<h3>Duration: 00:00 hours</h3>
						</Col>
						<Col className='text-center'>
							<h2>Course authors</h2>
							<p>Author list is empty</p>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
};

export default CreateCourse;
