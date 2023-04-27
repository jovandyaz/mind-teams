import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Stack, IconButton, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Iconify from '../../../components/Iconify';
// import { useCookies } from 'react-cookie'
import axios from 'axios';
import { AuthContext } from '../../../contexts/AuthProvider';

export default function LoginForm() {
	const { setAuth } = useContext(AuthContext);
	const navigate = useNavigate();
	// const [setCookies] = useCookies()

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [showPassword, setShowPassword] = useState(false);
	const from = location.state?.from?.pathname || '/users';

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				'http://localhost:3000/auth/login',
				{ email, password }
				// {
				//   headers: { 'Content-Type': 'application/json' },
				//   withCredentials: true
				// }
			);

			const accessToken = response.data.accessToken;
			console.log(
				'🚀 ~ file: LoginForm.jsx:34 ~ handleLogin ~ response?.data?:',
				response.data
			);
			// const roles = response?.data?.roles
			setAuth({ accessToken });
			// setCookies('token', response.data.token)
			setEmail('');
			setPassword('');
			navigate(from, { replace: true });
		} catch (err) {
			if (!err?.response) {
				setErrorMessage('No Server Response');
			} else if (err.response?.status === 401) {
				setErrorMessage('Unauthorized');
			} else {
				setErrorMessage('Login Failed');
			}
		}
	};

	useEffect(() => {
		setErrorMessage('');
	}, [email, password]);

	return (
		<form onSubmit={handleLogin}>
			<Stack spacing={3} sx={{ my: 2 }}>
				<p
					className={errorMessage ? 'errmsg' : 'offscreen'}
					aria-live="assertive"
				>
					{errorMessage}
				</p>
				<TextField
					name="email"
					label="Email"
					type="email"
					value={email}
					autoComplete="off"
					required
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					name="password"
					label="Password"
					type={showPassword ? 'text' : 'password'}
					value={password}
					required
					onChange={(e) => setPassword(e.target.value)}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									onClick={() => setShowPassword(!showPassword)}
									edge="end"
								>
									<Iconify
										icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'}
									/>
								</IconButton>
							</InputAdornment>
						),
					}}
				/>
			</Stack>

			{/* <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 2 }}>
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack> */}

			<LoadingButton
				fullWidth
				size="large"
				type="submit"
				variant="contained"
				// loading={isLoading}
			>
				Login
			</LoadingButton>
		</form>
	);
}
