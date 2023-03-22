import React, { useState } from 'react';
import CourseContext from '../../helpers/courseContext';

import CourseCard from './components/CourseCard/CourseCard';
import { mockedCoursesList } from './components/CourseCard/mockedData';
import SearchBar from './components/SearchBar/SearchBar';

const Courses = () => {
	const [courseList, setCourseList] = useState(mockedCoursesList);
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
		<CourseContext.Provider value={{ filteredResult }}>
			<SearchBar />
			<List />
		</CourseContext.Provider>
	);
};

export default Courses;
