export function getAuthorNames(listOfAuthorsIds, totalAuthorList) {
	if (totalAuthorList) {
		return listOfAuthorsIds
			.map(
				(authorId) =>
					totalAuthorList.find((author) => author.id === authorId)?.name ||
					'N/A'
			)
			.join(', ');
	} else {
		return 'Loading';
	}
}
