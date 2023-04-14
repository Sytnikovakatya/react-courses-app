import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import './CreateCourse.css';

import pipeDuration from '../../helpers/pipeDuration';
import { dateGenerator } from '../../helpers/dateGenerator';
import CourseAuthorList from './components/CourseAuthorList/CourseAuthorList';
import { isFormValid, changeHandlerNumbers } from '../../helpers/isFormValid';

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

import { addAuthor } from '../../features/authorsSlice';
import { addCourse } from '../../features/coursesSlice';

export default function CreateCourse() {
	const authors = useSelector((state) => state.authors);

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [characterLimit] = useState(2);
	const [duration, setDuration] = useState('0');

	const [authorName, setAuthorName] = useState('');
	const [authorsList, setAuthorList] = useState(authors[0]);
	const [authorCourseList, setAuthorCourseList] = useState('');

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleAddAuthor = (e) => {
		e.preventDefault();
		const newItem = {
			id: uuidv4(),
			name: authorName,
		};
		setAuthorList((prevState) => [...prevState, newItem]);
		dispatch(addAuthor(newItem));
	};

	const handleCourseList = (id) => {
		let chosenAuthorName = authorsList.find((author) => author.id === id).name;
		const newItem = {
			id: id,
			name: chosenAuthorName,
		};
		setAuthorCourseList((prevState) => [...prevState, newItem]);

		setAuthorList((prevState) => {
			const idx = prevState.findIndex((item) => item.id === id);
			return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
		});
	};

	const submitCourse = () => {
		if (isFormValid(description, title, duration, authorCourseList)) {
			const authors = authorCourseList.map((author) => {
				return author.id;
			});
			const courseModel = {
				id: uuidv4(),
				title: title,
				description: description,
				creationDate: dateGenerator(new Date()),
				duration: duration,
				authors: authors,
			};
			navigate('/courses');
			dispatch(addCourse(courseModel));
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
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									isInvalid={title.length < characterLimit}
								/>
							</InputGroup>
						</Col>
						<Col md={{ span: 3, offset: 4 }}>
							<Button
								text='Create course'
								type='submit'
								onClick={submitCourse}
							/>
							<Link to='/courses'>
								<Button text='Close' type='submit' />
							</Link>
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
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									isInvalid={description.length < characterLimit}
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
							<Form onSubmit={handleAddAuthor}>
								<InputGroup className='mb-3'>
									<Input
										placeholder='Enter author name...'
										labelText='text'
										nameInput='Author name'
										id='name'
										onChange={(e) => setAuthorName(e.target.value)}
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
												onClick={() => {
													handleCourseList(author.id);
												}}
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
								authorCourseList={authorCourseList}
								setAuthorCourseList={setAuthorCourseList}
								setAuthorList={setAuthorList}
							/>
						</Col>
					</Row>
				</Container>
			</Container>
		</>
	);
}
