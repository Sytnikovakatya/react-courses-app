import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

import Button from '../../../../common/Button/Button';

import { getAuthorNames } from '../../../../helpers/getAuthorNames';
import getTimeFromMins from '../../../../helpers/pipeDuration';

export default function CourseCard({
	id,
	title,
	description,
	duration,
	authors,
	creationDate,
	totalAuthorList,
}) {
	return (
		<>
			<Card bg='light shadow' className='p-4 m-5'>
				<div className='row g-0'>
					<div className='col-8 pe-5'>
						<Card.Title>{title}</Card.Title>
						<Card.Text>{description}</Card.Text>
					</div>
					<div className='col-4'>
						<Card.Body>
							<Card.Text className='text-truncate'>
								<strong>Authors: </strong>
								{getAuthorNames(authors, totalAuthorList)}
							</Card.Text>
							<Card.Text>
								<strong>Duration: </strong>
								{getTimeFromMins(duration)} hours
							</Card.Text>
							<Card.Text>
								<strong>Created: </strong>
								{creationDate}
							</Card.Text>
							<Link to={`/courses/${id}`}>
								<Button text='Show course' />
							</Link>
						</Card.Body>
					</div>
				</div>
			</Card>
		</>
	);
}
