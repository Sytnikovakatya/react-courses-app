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
	async (id, token) => {
		try {
			const res = await CoursesDataService.remove(id, token);
			console.log(res.data);
			return res.data.result;
		} catch (e) {
			console.log(e);
		}
	}
);
export const createCourse = createAsyncThunk(
	'courses/add',
	async ({ data }) => {
		console.log(data);
		const token = JSON.parse(localStorage.getItem('token'));
		try {
			const res = await CoursesDataService.create(data, token);
			console.log(res.data.result);
			return res.data.result;
		} catch (e) {
			console.log(e);
		}
	}
);

export const updateCourse = createAsyncThunk(
	'courses/update',
	async ({ id, data }) => {
		const token = JSON.parse(localStorage.getItem('token'));
		try {
			const res = await CoursesDataService.update(id, data, token);
			return res.data.result;
		} catch (e) {
			console.log(e);
		}
	}
);

const coursesSlice = createSlice({
	name: 'courses',
	initialState: [],
	reducers: {
		removeCourse: (state, action) => {
			const itemId = action.payload;
			return state.filter((item) => item.id !== itemId);
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(retrieveCourses.fulfilled, (state, action) => {
				const todo = action.payload;
				return todo;
			})
			.addCase(deleteCourse.fulfilled, (state, action) => {
				/*let index = state.findIndex(({ id }) => id === action.payload.id);
				state.splice(index, 1);*/ console.log(action.payload);
			})
			.addCase(createCourse.fulfilled, (state, action) => {
				const todo = action.payload;
				state.push(todo);
			})
			.addCase(updateCourse.fulfilled, (state, action) => {
				const index = state.findIndex(
					(courses) => courses.id === action.payload.id
				);
				state[index] = {
					...state[index],
					...action.payload,
				};
			});
	},
});

export const { addCourse, removeCourse, afilter } = coursesSlice.actions;

export default coursesSlice.reducer;
