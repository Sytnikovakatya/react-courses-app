import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import './CourseForm.css';

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

import { addCourse } from '../../state/coursesSlice';
import { createAuthor } from '../../state/authorsSlice';
import { updateCourse } from '../../state/coursesSlice';

export default function CourseForm() {
	const { courseId } = useParams();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const courses = useSelector((state) => state.courses);
	const authors = useSelector((state) => state.authors);

	const [characterLimit] = useState(2);
	const [authorName, setAuthorName] = useState('');
	const [authorsList, setAuthorList] = useState(authors);
	const [authorCourseList, setAuthorCourseList] = useState([]);

	const initialCourseState = {
		title: '',
		description: '',
		duration: '',
		authors: [],
	};
	const [currentCourse, setCurrentCourse] = useState(initialCourseState);
	const { title, description, duration } = currentCourse;

	const getCourseUpdate = (courseId) => {
		const courseUpdate = courses.find((course) => course.id === courseId);
		const author = authorsList.find(
			(author) => author.id === courseUpdate.authors[0]
		);

		setAuthorCourseList((prevState) => [...prevState, author]);

		setAuthorList((prevState) => {
			const idx = prevState.findIndex((item) => item.id === author.id);
			return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
		});

		setCurrentCourse(courseUpdate);
	};

	useEffect(() => {
		if (courseId) getCourseUpdate(courseId);
	}, [courseId]);

	const handleAddAuthor = (e) => {
		e.preventDefault();
		const newItem = {
			id: uuidv4(),
			name: authorName,
		};
		setAuthorList((prevState) => [...prevState, newItem]);
		dispatch(createAuthor(authorName));
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

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setCurrentCourse((state) => ({
			...state,
			[name]: value,
		}));
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
			dispatch(addCourse(courseModel));
			navigate('/courses');
		}
	};

	const submitUpdating = () => {
		const authors = authorCourseList.map((author) => {
			return author.id;
		});
		const courseModel = {
			title: title,
			description: description,
			duration: duration,
			authors: authors,
		};

		dispatch(
			updateCourse({
				id: currentCourse.id,
				data: courseModel,
			})
		);
		navigate('/courses');
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
									nameInput='title'
									id='title'
									value={title}
									onChange={handleInputChange}
									isInvalid={title.length < characterLimit}
								/>
							</InputGroup>
						</Col>
						<Col md={{ span: 3, offset: 4 }}>
							{courseId ? (
								<Button
									text='Update course'
									type='submit'
									onClick={submitUpdating}
								/>
							) : (
								<Button
									text='Create course'
									type='submit'
									onClick={submitCourse}
								/>
							)}
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
									name='description'
									value={description}
									onChange={handleInputChange}
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
									nameInput='duration'
									id='duration'
									value={duration}
									onInput={changeHandlerNumbers}
									onChange={handleInputChange}
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
