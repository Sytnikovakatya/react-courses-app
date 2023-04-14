import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthorsDataService from '../services/authors.service';

export const retrieveAuthors = createAsyncThunk(
	'authors/retrieve',
	async () => {
		const res = await AuthorsDataService.getAuthorsAll();
		return res.data.result;
	}
);

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],
	reducers: {
		addAuthor: (state, action) => {
			const newItem = action.payload;
			state[0].push(newItem);
		},
		removeAuthor: (state, action) => {
			const itemId = action.payload;
			return state.filter((item) => item.id !== itemId);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(retrieveAuthors.fulfilled, (state, action) => {
			const todo = action.payload;
			return [todo];
		});
	},
});

export const { addAuthor, removeAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
