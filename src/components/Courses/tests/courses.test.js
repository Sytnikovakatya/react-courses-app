import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Courses from '../Courses';
import { mockedCoursesList } from '../../../helpers/mockedCoursesList';

let mockedState = {
	user: {
		isLoggedIn: true,
		role: 'admin',
	},
	courses: mockedCoursesList,
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('Courses component', () => {
	test('should display amount of CourseCard equal length of courses array.', () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		const list = screen.getByRole('list');
		const { getAllByRole } = within(list);
		const items = getAllByRole('listitem');
		expect(items.length).toBe(2);
	});

	test('CourseForm should be showed after a click on a button "Add new course"', () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		expect(screen.getByText('Add new course')).toBeInTheDocument();
		fireEvent.click(screen.getByText('Add new course'));
		expect(window.location.pathname).toEqual('/courses/add');
	});

	test('should display Empty container if courses array length is 0', () => {
		mockedState = {
			user: {
				isLoggedIn: true,
			},
		};

		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<Courses />
				</BrowserRouter>
			</Provider>
		);

		expect(screen.queryByRole('listitem')).toBeNull();
	});
});
