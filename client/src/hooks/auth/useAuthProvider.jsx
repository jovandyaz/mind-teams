import { UserProvider } from './useAuth';

const AuthProvider = ({ children }) => <UserProvider>{children}</UserProvider>;

export default AuthProvider;
