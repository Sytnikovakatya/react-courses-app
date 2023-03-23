import React from 'react';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchBar = ({ onChange, onSubmit, onClick }) => {
	return (
		<>
			<Container>
				<Row>
					<Col md={{ span: 5, offset: 0 }}>
						<InputGroup className='mb-3'>
							<Input
								placeholder='Enter course name...'
								buttonText='Search'
								labelText='search'
								nameInput='mySearch'
								onChange={onChange}
							/>
							<Button text='Search' onClick={onSubmit} type='submit' />
						</InputGroup>
					</Col>
					<Col md={{ span: 3, offset: 4 }}>
						<Button text='Add new course' type='submit' onClick={onClick} />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SearchBar;
