import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './layouts/MainLayout';
import Login from './pages/Login';
import UsersPage from './pages/Users';
import Page404 from './pages/404';
import UserProfile from './pages/UserProfile';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/login" element={<Login />} />
			<Route path="/404" element={<Page404 />} />
			<Route element={<Layout />}>
				<Route path="/users" element={<UsersPage />} />
				<Route path="/users/:id" element={<UserProfile />} />
			</Route>
			<Route path="*" element={<Navigate to="/404" replace />} />
		</Routes>
	);
}

export default App;
