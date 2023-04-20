import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setMessage } from './messageSlice';

import AuthService from '../services/authentication.service';

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

export const logout = createAsyncThunk('auth/logout', async ({ token }) => {
	await AuthService.logout(token);
});

const initialState = {
	isLoggedIn: false,
	name: '',
	email: '',
	token: null,
	role: '',
};

const authSlice = createSlice({
	name: 'user',
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
				state.token = action.payload.user.result;
				state.email = action.payload.user.user.email;
				state.name = action.payload.user.user.name;
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoggedIn = false;
				state.token = null;
			})
			.addCase(logout.fulfilled, (state, action) => {
				state.isLoggedIn = false;
				state.token = null;
			});
	},
});

const { reducer } = authSlice;
export default reducer;
