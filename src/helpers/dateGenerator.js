export function dateGenerator(currentDate) {
	const currentDayOfMonth = currentDate.getDate();
	const currentMonth = currentDate.getMonth();
	const currentYear = currentDate.getFullYear();

	const dateString =
		currentMonth + 1 + '/' + currentDayOfMonth + '/' + currentYear;

	return dateString;
}
