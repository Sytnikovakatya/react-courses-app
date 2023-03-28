import React, { useState } from 'react';

import { mockedAuthorsList, mockedCoursesList } from '../../helpers/mockedData';
import SearchBar from './components/SearchBar/SearchBar';
import List from './components/List/List';
import CreateCourse from '../CreateCourse/CreateCourse';

export default function Courses() {
	const [courseList, setCourseList] = useState(mockedCoursesList);
	const [searchBarInputValue, setSearchBarInputValue] = useState('');
	const [totalAuthorList, setTotalAuthorList] = useState(mockedAuthorsList);
	const [active, setActive] = useState('List');

	const onCreateCourse = () => {
		setActive('CreateCourse');
	};

	const closeCreateModal = () => {
		setActive('List');
	};

	const addNewCourse = (data) => {
		setCourseList((prevState) => [...prevState, data]);
		setActive('List');
	};

	const updateTotalAuthorsList = (newItem) => {
		setTotalAuthorList((prevState) => [...prevState, newItem]);
	};

	const searchItems = (event) => {
		event.preventDefault();
		let searchValue = event.target.value;
		setSearchBarInputValue(searchValue);
	};

	const filtredResult = courseList.filter((item) => {
		return Object.values(item)
			.join('')
			.toLowerCase()
			.includes(searchBarInputValue.toLowerCase());
	});

	return (
		<>
			<div>
				{active === 'List' && (
					<>
						<SearchBar
							searchItems={searchItems}
							onCreateCourse={onCreateCourse}
						/>
						<List courses={filtredResult} totalAuthorList={totalAuthorList} />
					</>
				)}
				{active === 'CreateCourse' && (
					<CreateCourse
						addNewCourse={addNewCourse}
						updateTotalAuthorsList={updateTotalAuthorsList}
						closeCreateModal={closeCreateModal}
					/>
				)}
			</div>
		</>
	);
}
