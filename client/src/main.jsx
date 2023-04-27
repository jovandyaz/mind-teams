import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import ThemeProvider from './theme';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './contexts/AuthProvider';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
	<ThemeProvider>
		<AuthProvider>
			<QueryClientProvider client={queryClient}>
				<CookiesProvider>
					<BrowserRouter>
						<App />
						<ReactQueryDevtools initialIsOpen={false} />
					</BrowserRouter>
				</CookiesProvider>
			</QueryClientProvider>
		</AuthProvider>
	</ThemeProvider>
);
