export function getAuthorNames(listOfAuthorsIds, totalAuthorList) {
	return listOfAuthorsIds
		.map(
			(authorId) =>
				totalAuthorList.find((author) => author.id === authorId)?.name || 'N/A'
		)
		.join(', ');
}
