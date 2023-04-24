import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

const mockedState = {
	user: {
		isLoggedIn: true,
		name: 'Test Name',
	},
	courses: [],
	authors: [],
};
const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

test('Header should have logo and username', () => {
	render(
		<Provider store={mockedStore}>
			<BrowserRouter>
				<Header />
			</BrowserRouter>
		</Provider>
	);
	expect(screen.queryByText('Test Name')).toBeInTheDocument();
	expect(screen.queryByAltText('logo of courses')).toBeInTheDocument();
});
