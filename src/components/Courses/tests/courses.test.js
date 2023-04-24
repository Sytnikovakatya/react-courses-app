import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Courses from '../Courses';

const mockedState = {
	user: {
		isLoggedIn: true,
		role: 'admin',
	},
	courses: [],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

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
