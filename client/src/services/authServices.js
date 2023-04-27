import axios from 'axios';

const apiCall = axios.create({
	baseURL: 'http://localhost:3000/auth',
});

export const getToken = async () => {
	try {
		const res = await apiCall.post('/login');
		return res.data;
	} catch (error) {
		console.error('🚀 ~ error:', error.message);
	}
};

export default apiCall;
