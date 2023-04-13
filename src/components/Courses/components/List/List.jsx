import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import { useSelector } from 'react-redux';

export default function List() {
	const courses = useSelector((state) => state.courses);
	return (
		<section>
			{courses.map((course, id) => {
				return (
					<div key={id}>
						<CourseCard {...course} />
					</div>
				);
			})}
		</section>
	);
}
