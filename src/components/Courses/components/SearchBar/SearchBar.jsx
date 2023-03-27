import React from 'react';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SearchBar({ searchItems, onSubmit, onCreateCourse }) {
	return (
		<>
			<Container>
				<Row>
					<Col md={{ span: 5, offset: 0 }}>
						<InputGroup className='mb-3'>
							<Input
								placeholder='Enter course name...'
								labelText='search'
								nameInput='mySearch'
								onChange={searchItems}
							/>
							<Button text='Search' onClick={onSubmit} type='submit' />
						</InputGroup>
					</Col>
					<Col md={{ span: 3, offset: 4 }}>
						<Button
							text='Add new course'
							type='submit'
							onClick={onCreateCourse}
						/>
					</Col>
				</Row>
			</Container>
		</>
	);
}
