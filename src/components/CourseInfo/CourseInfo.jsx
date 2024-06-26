import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import Button from '../../common/Button/Button';

import pipeDuration from '../../helpers/pipeDuration';
import { getAuthorNames } from '../../helpers/getAuthorNames';

export default function CourseInfo() {
	const { courseId } = useParams();

	const courses = useSelector((state) => state.courses);
	const authorsList = useSelector((state) => state.authors);

	const course = useMemo(() => {
		return courses.find((course) => course.id === courseId);
	}, [courseId, courses]);

	return (
		<>
			<Container className='light shadow p-5'>
				<Link to='/courses'>
					<Button text='Back to courses' />
				</Link>
				<h1 className='text-center mb-5 pb-5'>{course.title}</h1>
				<Row className='mb-5'>
					<Col md={{ span: 7, offset: 1 }}>
						<p>{course.description}</p>
					</Col>
					<Col md={{ span: 3, offset: 1 }}>
						<p>
							<strong>ID: </strong>
							{courseId}
						</p>
						<p>
							<strong>Duration: </strong>
							{pipeDuration(course.duration)} hours
						</p>
						<p>
							<strong>Created: </strong>
							{course.creationDate}
						</p>
						<p>
							<strong>Authors: </strong>
							{getAuthorNames(course.authors, authorsList)}
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
