import { configureStore } from '@reduxjs/toolkit';
import user from './authenticationSlice';
import message from './messageSlice';
import courses from './coursesSlice';
import authors from './authorsSlice';

const reducer = {
	courses,
	authors,
	user,
	message,
};

export const store = configureStore({
	reducer: reducer,
	devTools: true,
});
