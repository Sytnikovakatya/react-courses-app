import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CoursesDataService from '../services/courses.service';

export const retrieveCourses = createAsyncThunk(
	'courses/retrieve',
	async () => {
		const res = await CoursesDataService.getCoursesAll();
		return res.data.result;
	}
);

export const deleteCourse = createAsyncThunk(
	'courses/delete',
	async ({ id }) => {
		const res = await CoursesDataService.remove(id);
		console.log(res.data);
		return res.data.result;
	}
);
export const createCourse = createAsyncThunk(
	'courses/create',
	async ({ title, description, duration, authors }) => {
		const res = await CoursesDataService.create({
			title,
			description,
			duration,
			authors,
		});
		console.log(res.data);
		return res.data.result;
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
		builder
			.addCase(retrieveCourses.fulfilled, (state, action) => {
				const todo = action.payload;
				return [todo];
			})
			.addCase(deleteCourse.fulfilled, (state, action) => {
				let index = state.findIndex(({ id }) => id === action.payload.id);
				state.splice(index, 1);
			})
			.addCase(createCourse.fulfilled, (state, action) => {
				const todo = action.payload;
				return state.push(todo);
			});
	},
});

export const { addCourse, removeCourse, afilter } = coursesSlice.actions;

export default coursesSlice.reducer;
