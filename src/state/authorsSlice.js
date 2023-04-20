import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthorsDataService from '../services/authors.service';

export const retrieveAuthors = createAsyncThunk(
	'authors/retrieve',
	async () => {
		const res = await AuthorsDataService.getAuthorsAll();
		return res.data.result;
	}
);

export const createAuthor = createAsyncThunk(
	'authors/add',
	async ({ name }) => {
		const res = await AuthorsDataService.create(name);
		console.log('addauthor');
		console.log(res.data);
		return res.data;
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
		builder
			.addCase(retrieveAuthors.fulfilled, (state, action) => {
				const todo = action.payload;
				return [todo];
			})
			.addCase(createAuthor.fulfilled, (state, action) => {
				const todo = action.payload;
				console.log(todo);
				return state.push(todo);
			});
	},
});

export const { addAuthor, removeAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
