import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './messageSlice';

import AuthService from '../services/authentication.service';

const user = localStorage.getItem('user');

export const register = createAsyncThunk(
	'auth/register',
	async ({ name, email, password }, thunkAPI) => {
		try {
			const response = await AuthService.register(name, email, password);
			return response.data;
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const login = createAsyncThunk(
	'auth/login',
	async ({ email, password }, thunkAPI) => {
		try {
			const data = await AuthService.login(email, password);
			return { user: data };
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();
			thunkAPI.dispatch(setMessage(message));
			return thunkAPI.rejectWithValue();
		}
	}
);

export const logout = createAsyncThunk('auth/logout', async () => {
	await AuthService.logout();
});

const initialState = user
	? { isLoggedIn: true, user }
	: { isLoggedIn: false, user: null };

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(register.fulfilled, (state, action) => {
				state.isLoggedIn = false;
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoggedIn = false;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoggedIn = true;
				state.user = action.payload.user;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoggedIn = false;
				state.user = null;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoggedIn = false;
				state.user = null;
			});
	},
});

const { reducer } = authSlice;
export default reducer;
