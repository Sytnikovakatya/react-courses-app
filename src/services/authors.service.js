import axios from '../components/api/axios';

const getAuthorsAll = () => {
	return axios.get('/authors/all');
};
const AuthorsService = {
	getAuthorsAll,
};

export default AuthorsService;
