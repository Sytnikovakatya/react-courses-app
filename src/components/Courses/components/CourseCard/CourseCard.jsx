import React from 'react';

import Card from 'react-bootstrap/Card';

import Button from '../../../../common/Button/Button';

import { getAuthorNames } from '../../../../helpers/getAuthorNames';
import getTimeFromMins from '../../../../helpers/pipeDuration';

export default function CourseCard({
	title,
	description,
	duration,
	authors,
	creationDate,
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
								{getAuthorNames(authors)}
							</Card.Text>
							<Card.Text>
								<strong>Duration: </strong>
								{getTimeFromMins(duration)} hours
							</Card.Text>
							<Card.Text>
								<strong>Created: </strong>
								{creationDate}
							</Card.Text>
							<Button text='Show course' />
						</Card.Body>
					</div>
				</div>
			</Card>
		</>
	);
}
