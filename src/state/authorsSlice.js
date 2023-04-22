import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthorsDataService from '../services/authors.service';

export const retrieveAuthors = createAsyncThunk(
	'authors/retrieve',
	async () => {
		const res = await AuthorsDataService.getAuthorsAll();
		return res.data.result;
	}
);

export const createAuthor = createAsyncThunk('authors/add', async (name) => {
	const token = JSON.parse(localStorage.getItem('token'));
	try {
		const res = await AuthorsDataService.create(name, token);
		return res.data.result;
	} catch (e) {
		console.log(e);
	}
});

const authorsSlice = createSlice({
	name: 'authors',
	initialState: [],
	reducers: {
		removeAuthor: (state, action) => {
			const itemId = action.payload;
			return state.filter((item) => item.id !== itemId);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(retrieveAuthors.fulfilled, (state, action) => {
				const todo = action.payload;
				return todo;
			})
			.addCase(createAuthor.fulfilled, (state, action) => {
				const todo = action.payload;
				state.push(todo);
			});
	},
});

export const { removeAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
