import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';

import List from '../../List/List';
import { mockedAuthorsList } from '../../../../../helpers/mockedAuthorsList';

const mockedState = {
	user: {
		isLoggedIn: true,
		role: 'admin',
	},
	courses: [
		{
			id: 'de5aaa59-90f5-4dbc-b8a9-aaf205c551ba',
			title: 'JavaScript',
			description: `Description`,
			creationDate: '8/3/2021',
			duration: 160,
			authors: [
				'27cc3006-e93a-4748-8ca8-73d06aa93b6d',
				'f762978b-61eb-4096-812b-ebde22838167',
			],
		},
	],
	authors: mockedAuthorsList,
};

const mockedStore = {
	getState: () => mockedState,
	subscribe: jest.fn(),
	dispatch: jest.fn(),
};

describe('CoursesCard component', () => {
	test('should display title', async () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<List />
				</BrowserRouter>
			</Provider>
		);

		const title = screen.getByText(/javascript/i);
		expect(title).toBeInTheDocument();
	});

	test('should display description', async () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<List />
				</BrowserRouter>
			</Provider>
		);

		const description = screen.getByText(/Description/i);
		expect(description).toBeInTheDocument();
	});

	test('should display duration in the correct format', async () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<List />
				</BrowserRouter>
			</Provider>
		);

		const duration = screen.getByText(/2:40 hours/i);
		expect(duration).toBeInTheDocument();
	});

	test('should display authors list', async () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<List />
				</BrowserRouter>
			</Provider>
		);

		const authors = screen.getByText(/Vasiliy Dobkin, Nicolas Kim/i);
		expect(authors).toBeInTheDocument();
	});

	test('should display created date in the correct format', async () => {
		render(
			<Provider store={mockedStore}>
				<BrowserRouter>
					<List />
				</BrowserRouter>
			</Provider>
		);

		const date = screen.getByText('8/3/2021');
		expect(date).toBeInTheDocument();
	});
});
