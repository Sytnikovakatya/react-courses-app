import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ListGroup } from 'react-bootstrap';
import Button from '../../../common/Button/Button';

export default function CourseAuthorList({
	authorCourseList,
	setAuthorCourseList,
	setAuthorList,
}) {
	const handleDeleteItem = (id) => {
		setAuthorCourseList((prevState) => {
			const idx = prevState.findIndex((item) => item.id === id);
			return [...prevState.slice(0, idx), ...prevState.slice(idx + 1)];
		});
		let name = authorCourseList.find((author) => author.id === id).name;
		const newItem = {
			id: uuidv4(),
			name,
		};
		setAuthorList((prevState) => {
			const newList = [...prevState, newItem];
			return newList;
		});
	};

	if (authorCourseList.length > 0) {
		return (
			<ListGroup>
				{authorCourseList.map((author) => {
					return (
						<ListGroup.Item key={author.id} className='authors-list'>
							<div className='fw-bold'>{author.name}</div>
							<Button
								text='Delete author'
								type='submit'
								onClick={() => handleDeleteItem(author.id)}
							/>
						</ListGroup.Item>
					);
				})}
			</ListGroup>
		);
	} else {
		return <p>Author list is empty</p>;
	}
}
