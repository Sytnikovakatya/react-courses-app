import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

export default function List({ courses, totalAuthorList }) {
	return (
		<section>
			{courses.map((course) => {
				return (
					<div key={course.id}>
						<CourseCard {...course} totalAuthorList={totalAuthorList} />
					</div>
				);
			})}
		</section>
	);
}
