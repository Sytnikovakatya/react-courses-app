import React, { useState, useContext } from 'react';
import CourseContext from '../../../../helpers/courseContext';

import Button from '../../../../common/Button/Button';
import Input from '../../../../common/Input/Input';

import InputGroup from 'react-bootstrap/InputGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchBar = () => {
	const { filteredResult } = useContext(CourseContext);

	const [searchInput, setSearchInput] = useState('');

	const searchItems = (event) => {
		event.preventDefault();
		let searchValue = event.target.value;
		setSearchInput(searchValue);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		filteredResult(searchInput);
	};
	return (
		<>
			<Container>
				<Row>
					<Col md={{ span: 5, offset: 0 }}>
						<InputGroup className='mb-3'>
							<Input
								placeholderText='Enter course name...'
								buttonText='Search'
								labelText='search'
								nameInput='mySearch'
								onChange={searchItems}
							/>
							<Button text='Search' onClick={handleSubmit} />
						</InputGroup>
					</Col>
					<Col md={{ span: 3, offset: 4 }}>
						<Button text='Add new course' />
					</Col>
				</Row>
			</Container>
		</>
	);
};

export default SearchBar;
