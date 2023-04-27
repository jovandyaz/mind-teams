import SvgColor from '../../../components/SvgColor';

const icon = (name) => (
	<SvgColor
		src={`/assets/icons/navbar/${name}.svg`}
		sx={{ width: 1, height: 1 }}
	/>
);

const navConfig = [
	{
		title: 'users',
		path: '/users',
		icon: icon('ic_user'),
	},
];

export default navConfig;
