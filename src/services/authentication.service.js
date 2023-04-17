import axios from '../components/api/axios';

function register(name, email, password) {
	return axios.post('/register', {
		name,
		email,
		password,
	});
}

function login(email, password) {
	return axios
		.post('/login', {
			email,
			password,
		})
		.then((response) => {
			localStorage.setItem('user', JSON.stringify(response.data));
			return response.data;
		});
}

function logout() {
	localStorage.removeItem('user');
}

const authService = {
	register,
	login,
	logout,
};

export default authService;
