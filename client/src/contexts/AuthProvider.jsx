import { createContext, useState } from 'react';

const AuthContext = createContext({});
const initialState = {
	roles: [],
	accessToken: '',
};

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialState);

	return (
		<AuthContext.Provider value={{ auth, setAuth }}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };
