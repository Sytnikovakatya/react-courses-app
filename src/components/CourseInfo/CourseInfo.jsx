import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';

import Button from '../../common/Button/Button';
import { mockedCoursesList } from '../../helpers/mockedData';

import pipeDuration from '../../helpers/pipeDuration';

export default function CourseInfo() {
	const [course, setCourse] = useState([]);
	const { courseId } = useParams();

	useEffect(() => {
		const courseShown = mockedCoursesList.find(
			(course) => course.id === courseId
		);
		setCourse(courseShown);
	}, [courseId]);

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
							{course.authors}
						</p>
					</Col>
				</Row>
			</Container>
		</>
	);
}
