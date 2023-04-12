import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authenticationSlice';
import messageReducer from './features/messageSlice';
import coursesReducer from './features/coursesSlice';
import authorsReducer from './features/authorsSlice';

const reducer = {
	courses: coursesReducer,
	authors: authorsReducer,
	auth: authReducer,
	message: messageReducer,
};

export const store = configureStore({
	reducer: reducer,
	devTools: true,
});
