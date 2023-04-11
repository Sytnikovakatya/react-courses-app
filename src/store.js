import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import messageReducer from './features/messageSlice';

const reducer = {
	auth: authReducer,
	message: messageReducer,
};

export const store = configureStore({
	reducer: reducer,
	devTools: true,
});
