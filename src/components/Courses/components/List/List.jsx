import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import { useSelector } from 'react-redux';

export default function List({ searchBarInputValue }) {
	const courses = useSelector((state) => state.courses);

	const filtredResult = searchBarInputValue
		? courses.filter((item) => {
				return Object.values(item)
					.join('')
					.toLowerCase()
					.includes(searchBarInputValue.toLowerCase());
		  })
		: courses;

	return (
		<section role='list'>
			{filtredResult
				? filtredResult.map((course, id) => {
						return (
							<div key={id}>
								<CourseCard {...course} />
							</div>
						);
				  })
				: null}
		</section>
	);
}
