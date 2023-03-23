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
import { mockedAuthorsList } from '../../helpers/mockedData';

const CreateCourse = ({ onClick }) => {
	const [inputText, setInputText] = useState('');
	const [characterLimit] = useState(2);
	const [inputTitle, setInputTitle] = useState('');

	const changeHandler = (e) => {
		const value = e.target.value;
		e.target.value = value.replace(/\D/, '');
		let v = '5yyy2';
		console.log(v.replace('5', '1'));
	};

	const submitCourse = () => {
		if (inputText < characterLimit) {
			alert('Please, fill in all fields');
		}
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
									labelText='text'
									nameInput='Title'
									id='title'
									value={inputTitle}
									onChange={(e) => setInputTitle(e.target.value)}
									isInvalid={inputTitle.length < characterLimit}
								/>
							</InputGroup>
						</Col>
						<Col md={{ span: 3, offset: 4 }}>
							<Button
								text='Create course'
								type='submit'
								onClick={submitCourse}
							/>
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
									onChange={(e) => setInputText(e.target.value)}
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
									labelText='text'
									nameInput='Author name'
									id='name'
								/>
							</InputGroup>
							<Button text='Create author' type='submit' />
						</Col>
						<Col>
							<h2 className='text-center'>Authors</h2>
							<ListGroup>
								{mockedAuthorsList.map((author) => {
									return (
										<ListGroup.Item key={author.id} className='authors-list'>
											<div className='fw-bold'>{author.name}</div>
											<Button text='Add author' type='submit' />
										</ListGroup.Item>
									);
								})}
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
									labelText='text'
									nameInput='Duration'
									id='duration'
									onInput={changeHandler}
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
