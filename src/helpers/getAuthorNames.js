import { mockedAuthorsList } from './mockedData';

export function getAuthorNames(listOfAuthorsIds) {
	return listOfAuthorsIds
		.map(
			(authorId) =>
				mockedAuthorsList.find((author) => author.id === authorId)?.name ||
				'N/A'
		)
		.join(', ');
}
