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
			localStorage.setItem('token', JSON.stringify(response.data.result));
			return response.data;
		});
}

function logout(token) {
	localStorage.clear();
	return axios.delete('/logout', {
		headers: {
			Authorization: token,
		},
	});
}

function getUser(token) {
	return axios.get('/users/me', {
		headers: {
			Authorization: token,
		},
	});
}

const authService = {
	register,
	login,
	logout,
	getUser,
};

export default authService;
