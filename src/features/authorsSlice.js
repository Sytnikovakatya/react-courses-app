import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthorsDataService from '../services/authors.service';

const initialState = [];

export const retrieveAuthors = createAsyncThunk(
	'authors/retrieve',
	async () => {
		const res = await AuthorsDataService.getAuthorsAll();
		return res.data;
	}
);

const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(retrieveAuthors.fulfilled, (state, action) => {
			const todo = action.payload;
			return [...state, todo];
		});
	},
});

const { reducer } = authorsSlice;
export default reducer;
