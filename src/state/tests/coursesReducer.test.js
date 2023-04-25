import coursesReducer, { createCourse, retrieveCourses } from '../coursesSlice';
import { mockedCoursesList } from '../../helpers/mockedCoursesList';

describe('coursesReducer', () => {
	test('should return the initial state', () => {
		expect(coursesReducer(undefined, { type: undefined })).toEqual([]);
	});

	test('should handle retrieveCourses and returns new state', () => {
		const previousState = [];
		const action = retrieveCourses.fulfilled(mockedCoursesList);
		expect(coursesReducer(previousState, action)).toEqual(mockedCoursesList);
	});

	test('should handle createCourse and returns new state', () => {
		const previousState = [
			{
				title: 'title',
				description: 'description',
				duration: 100,
				authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d'],
			},
		];

		const action = createCourse.fulfilled({
			title: 'title2',
			description: 'description2',
			duration: 200,
			authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d'],
		});

		expect(coursesReducer(previousState, action)).toEqual([
			{
				title: 'title',
				description: 'description',
				duration: 100,
				authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d'],
			},
			{
				title: 'title2',
				description: 'description2',
				duration: 200,
				authors: ['27cc3006-e93a-4748-8ca8-73d06aa93b6d'],
			},
		]);
	});
});
