import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SearchBar({ searchItems }) {
	const { role } = useSelector((state) => state.user);

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
							<Button text='Search' />
						</InputGroup>
					</Col>
					<Col md={{ span: 3, offset: 4 }}>
						{role === 'admin' && (
							<Link to='/courses/add'>
								<Button text='Add new course' type='submit' />
							</Link>
						)}
					</Col>
				</Row>
			</Container>
		</>
	);
}
