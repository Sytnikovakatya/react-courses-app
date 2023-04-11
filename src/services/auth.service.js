import axios from '../components/api/axios';

const register = (name, email, password) => {
	return axios.post('/register', {
		name,
		email,
		password,
	});
};

const login = (email, password) => {
	return axios
		.post('/login', {
			email,
			password,
		})
		.then((response) => {
			localStorage.setItem('user', JSON.stringify(response.data));
			return response.data;
		});
};

const logout = () => {
	localStorage.removeItem('user');
};

const authService = {
	register,
	login,
	logout,
};

export default authService;
