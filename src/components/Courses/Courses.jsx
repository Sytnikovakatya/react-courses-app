import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import { mockedAuthorsList, mockedCoursesList } from '../../helpers/mockedData';
import SearchBar from './components/SearchBar/SearchBar';
import CreateCourse from '../CreateCourse/CreateCourse';

export default function Courses() {
	const [courseList, setCourseList] = useState(mockedCoursesList);
	const [searchBarInputValue, setSearchBarInputValue] = useState('');
	const [active, setActive] = useState('List');

	const [totalAuthorList, setTotalAuthorList] = useState(mockedAuthorsList);

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
		if (searchValue === '') {
			setCourseList(mockedCoursesList);
		}
	};

	const handleSubmit = () => {
		filteredResult(searchBarInputValue);
	};

	const filteredResult = (searchInput) => {
		const filteredData = mockedCoursesList.filter((item) => {
			return Object.values(item)
				.join('')
				.toLowerCase()
				.includes(searchInput.toLowerCase());
		});
		setCourseList(filteredData);
	};

	const List = () => {
		return (
			<section>
				{courseList.map((course) => {
					return (
						<div key={course.id}>
							<CourseCard {...course} totalAuthorList={totalAuthorList} />
						</div>
					);
				})}
			</section>
		);
	};

	return (
		<>
			<div>
				{active === 'List' && (
					<>
						<SearchBar
							searchItems={searchItems}
							onSubmit={handleSubmit}
							onCreateCourse={onCreateCourse}
						/>
						<List />
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
