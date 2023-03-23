import React, { useState } from 'react';

import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from '../../helpers/mockedData';
import SearchBar from './components/SearchBar/SearchBar';
import CreateCourse from '../CreateCourse/CreateCourse';

const Courses = () => {
	const [courseList, setCourseList] = useState(mockedCoursesList);
	const [searchInput, setSearchInput] = useState('');
	const [active, setActive] = useState('List');

	const createCourse = () => {
		setActive('CreateCourse');
	};

	const closeCreateModal = () => {
		setActive('List');
	};

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
			<div>
				{active === 'List' && (
					<>
						<SearchBar
							onChange={searchItems}
							onSubmit={handleSubmit}
							onClick={createCourse}
						/>
						<List />
					</>
				)}
				{active === 'CreateCourse' && (
					<CreateCourse onClick={closeCreateModal} />
				)}
			</div>
		</>
	);
};

export default Courses;
