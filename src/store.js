import { configureStore } from '@reduxjs/toolkit';
import user from './features/authenticationSlice';
import message from './features/messageSlice';
import courses from './features/coursesSlice';
import authors from './features/authorsSlice';

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
