import { mockedAuthorsList } from './mockedData';

export const getAuthorNames = (authors) => {
	let firstAuthor = mockedAuthorsList.find(
		(author) => author.id === authors[0]
	).name;
	let secondAuthor = mockedAuthorsList.find(
		(author) => author.id === authors[1]
	).name;
	return firstAuthor + ',' + secondAuthor;
};