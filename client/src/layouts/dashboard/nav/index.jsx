import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Drawer } from '@mui/material';
import useResponsive from '../../../hooks/useResponsive';
import Logo from '../../../components/Logo';
import Scrollbar from '../../../components/Scrollbar';
import NavSection from '../../../components/NavSection';
import navConfig from './config';

const NAV_WIDTH = 280;

export default function Nav({ openNav, onCloseNav }) {
	const { pathname } = useLocation();

	const isDesktop = useResponsive('up', 'lg');

	useEffect(() => {
		if (openNav) {
			onCloseNav();
		}
	}, [pathname]);

	const renderContent = (
		<Scrollbar
			sx={{
				height: 1,
				'& .simplebar-content': {
					height: 1,
					display: 'flex',
					flexDirection: 'column',
				},
			}}
		>
			<Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
				<Logo />
			</Box>

			<NavSection data={navConfig} />

			<Box sx={{ flexGrow: 1 }} />
		</Scrollbar>
	);

	return (
		<Box
			component="nav"
			sx={{
				flexShrink: { lg: 0 },
				width: { lg: NAV_WIDTH },
			}}
		>
			{isDesktop ? (
				<Drawer
					open
					variant="permanent"
					PaperProps={{
						sx: {
							width: NAV_WIDTH,
							bgcolor: 'background.default',
							borderRightStyle: 'dashed',
						},
					}}
				>
					{renderContent}
				</Drawer>
			) : (
				<Drawer
					open={openNav}
					onClose={onCloseNav}
					ModalProps={{
						keepMounted: true,
					}}
					PaperProps={{
						sx: { width: NAV_WIDTH },
					}}
				>
					{renderContent}
				</Drawer>
			)}
		</Box>
	);
}
