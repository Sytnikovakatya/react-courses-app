import axios from '../components/api/axios';

const getCoursesAll = () => {
	return axios.get('/courses/all');
};

const CoursesService = {
	getCoursesAll,
};

export default CoursesService;
