import React from 'react';
import CourseCard from '../CourseCard/CourseCard';

export default function List({
	courses,
	totalAuthorList,
	courseList,
	setCourseList,
}) {
	return (
		<section>
			{courses.map((course) => {
				return (
					<div key={course.id}>
						<CourseCard
							{...course}
							totalAuthorList={totalAuthorList}
							courseList={courseList}
							setCourseList={setCourseList}
						/>
					</div>
				);
			})}
		</section>
	);
}
