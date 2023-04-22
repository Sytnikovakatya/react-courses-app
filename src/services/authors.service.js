import axios from '../api/axios';

const getAuthorsAll = () => {
	return axios.get('/authors/all');
};

const create = (name, token) => {
	return axios.post(
		'/authors/add',
		{ name },
		{
			headers: {
				Authorization: token,
			},
		}
	);
};
const AuthorsService = {
	getAuthorsAll,
	create,
};

export default AuthorsService;
