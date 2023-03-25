import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import './CreateCourse.css';

import { mockedAuthorsList } from '../../helpers/mockedData';
import pipeDuration from '../../helpers/pipeDuration';
import CourseAuthorList from './components/CourseAuthorList';

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

export default function CreateCourse({ onClick }) {
	const [inputText, setInputText] = useState('');
	const [characterLimit] = useState(2);
	const [duration, setDuration] = useState('0');
	const [inputTitle, setInputTitle] = useState('');

	const [name, setName] = useState('');
	const [authorsList, setAuthorList] = useState(mockedAuthorsList);
	const [courseList, setCourseList] = useState('');

	const changeHandlerNumbers = (e) => {
		const value = e.target.value;
		e.target.value = value.replace(/\D/, '');
	};

	const submitCourse = () => {
		if (
			inputText < characterLimit ||
			inputTitle < characterLimit ||
			duration === '0' ||
			courseList.length === 0
		) {
			alert('Please, fill in all fields');
		} else {
			const courseModel = {
				id: uuidv4(),
				title: inputTitle,
				description: inputText,
				creationDate: new Date().getTime().toString(),
				duration: duration,
				authors: courseList,
			};
			console.log(courseModel);
			onClick();
		}
	};

	const handleAddItem = (e) => {
		e.preventDefault();
		const newItem = {
			id: uuidv4(),
			name,
		};
		if (name) {
			setAuthorList((prevState) => [...prevState, newItem]);
		}
	};

	const handleCourseList = (id) => {
		let name = authorsList.find((author) => author.id === id).name;
		const newItem = {
			id: uuidv4(),
			name,
		};
		setCourseList((prevState) => {
			const newList = [...prevState, newItem];
			return newList;
		});

		setAuthorList((prevState) => {
			const idx = prevState.findIndex((item) => item.id === id);
			return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
		});
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
							<Form onSubmit={handleAddItem}>
								<InputGroup className='mb-3'>
									<Input
										placeholder='Enter author name...'
										labelText='text'
										nameInput='Author name'
										id='name'
										onChange={(e) => setName(e.target.value)}
									/>
								</InputGroup>
								<Button text='Create author' type='submit' />
							</Form>
						</Col>
						<Col>
							<h2 className='text-center'>Authors</h2>
							<ListGroup>
								{authorsList.map((author) => {
									return (
										<ListGroup.Item key={author.id} className='authors-list'>
											<div className='fw-bold'>{author.name}</div>
											<Button
												text='Add author'
												type='submit'
												onClick={() => handleCourseList(author.id)}
											/>
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
									onInput={changeHandlerNumbers}
									onChange={(e) => setDuration(e.target.value)}
								/>
							</InputGroup>

							<h3>Duration: {pipeDuration(duration)} hours</h3>
						</Col>
						<Col className='text-center'>
							<h2>Course authors</h2>

							<CourseAuthorList
								courseList={courseList}
								setCourseList={setCourseList}
								setAuthorList={setAuthorList}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
