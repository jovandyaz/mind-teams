import { faker } from '@faker-js/faker';

function getRandomElementFromArray(arr) {
	const randomIndex = Math.floor(Math.random() * arr.length);
	const randomElement = arr[randomIndex];
	return randomElement;
}

const users = [...Array(24)].map((_, index) => ({
	id: faker.datatype.uuid(),
	avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
	name: faker.name.fullName(),
	email: faker.internet.email(),
	account: faker.company.name(),
	team: faker.random.word(),
	englishLevel: getRandomElementFromArray(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']),
	resumeLink: faker.internet.url(),
	status: getRandomElementFromArray(['active', 'banned']),
	skills: [...Array(3)].map(() => faker.lorem.word()),
	role: getRandomElementFromArray([
		'Leader',
		'Hr Manager',
		'UI Designer',
		'UX Designer',
		'UI/UX Designer',
		'Project Manager',
		'Backend Developer',
		'Full Stack Designer',
		'Front End Developer',
		'Full Stack Developer',
	]),
}));

export default users;
