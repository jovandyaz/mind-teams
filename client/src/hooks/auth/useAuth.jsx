import { createContext, useContext, useMemo } from 'react';
import { useCookies } from 'react-cookie';
import apiCall from '../../services/authServices';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
	const [cookies, setCookies, removeCookie] = useCookies();

	const login = async ({ email, password }) => {
		try {
			const res = await apiCall.post('/login', {
				email,
				password,
			});
			setCookies('token', res.data.token);
		} catch (error) {
			console.error('🚀 ~ error:', error.message);
		}
	};

	const logout = () => {
		['token'].forEach((obj) => removeCookie(obj));
	};

	const value = useMemo(
		() => ({
			cookies,
			login,
			logout,
		}),
		[cookies]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useAuth = () => {
	return useContext(UserContext);
};
