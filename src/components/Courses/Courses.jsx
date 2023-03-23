import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from './components/CourseCard/mockedData';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = () => {
	const [courseList, setCourseList] = useState(mockedCoursesList);
	const [searchInput, setSearchInput] = useState('');

	const searchItems = (event) => {
		event.preventDefault();
		let searchValue = event.target.value;
		setSearchInput(searchValue);
		if (searchValue === '') {
			setCourseList(mockedCoursesList);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		filteredResult(searchInput);
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
							<CourseCard {...course} />
						</div>
					);
				})}
			</section>
		);
	};

	return (
		<>
			<SearchBar onChange={searchItems} onSubmit={handleSubmit} />
			<List />
		</>
	);
};

export default Courses;
