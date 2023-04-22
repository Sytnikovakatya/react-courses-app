import axios from '../api/axios';

const getCoursesAll = () => {
	return axios.get('/courses/all');
};

const remove = (id, token) => {
	return axios.delete(`/courses/${id}`, id, {
		headers: {
			Authorization: token,
		},
	});
};
const create = (data, token) => {
	return axios.post('/courses/add', data, {
		headers: {
			Authorization: token,
		},
	});
};

const update = (id, data, token) => {
	return axios.put(`/courses/${id}`, data, {
		headers: {
			Authorization: token,
		},
	});
};

const CoursesService = {
	getCoursesAll,
	remove,
	create,
	update,
};

export default CoursesService;
