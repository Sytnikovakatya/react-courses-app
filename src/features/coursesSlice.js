import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CoursesDataService from '../services/courses.service';

const initialState = [];

export const retrieveCourses = createAsyncThunk(
	'courses/retrieve',
	async () => {
		const res = await CoursesDataService.getAll();
		return res.data;
	}
);

const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(retrieveCourses.fulfilled, (state, action) => {
			const todo = action.payload;
			return [...state, todo];
		});
	},
});

const { reducer } = coursesSlice;
export default reducer;
