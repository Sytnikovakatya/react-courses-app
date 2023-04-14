import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CoursesDataService from '../services/courses.service';

export const retrieveCourses = createAsyncThunk(
	'courses/retrieve',
	async () => {
		const res = await CoursesDataService.getCoursesAll();
		return res.data.result[0];
	}
);

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		addCourse: (state, action) => {
			const newItem = action.payload;
			state.push(newItem);
		},
		removeCourse: (state, action) => {
			const itemId = action.payload;
			return state.filter((item) => item.id !== itemId);
		},
	},
	extraReducers: (builder) => {
		builder.addCase(retrieveCourses.fulfilled, (state, action) => {
			const todo = action.payload;
			return [todo];
		});
	},
});

export const { addCourse, removeCourse, afilter } = coursesSlice.actions;

export default coursesSlice.reducer;
