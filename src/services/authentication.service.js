import axios from '../api/axios';

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

function logout(token) {
	localStorage.removeItem('user');
	return axios.delete('/logout', {
		headers: {
			Authorization: token,
		},
	});
}

const authService = {
	register,
	login,
	logout,
};

export default authService;
