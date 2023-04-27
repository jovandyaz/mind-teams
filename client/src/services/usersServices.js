import axios from 'axios';

const apiCall = axios.create({
	baseURL: 'http://localhost:3000',
});

export const getUsers = async () => {
	const res = await apiCall.get('/users');
	return res.data;
};

export const getUserById = async (id) => {
	const res = await apiCall.get(`/users/${id}`);
	return res.data;
};

export default apiCall;
