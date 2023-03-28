export function isFormValid(description, title, duration, authorCourseList) {
	const characterLimit = 2;
	if (
		description < characterLimit ||
		title < characterLimit ||
		duration === '0' ||
		authorCourseList.length === 0
	) {
		alert('Please, fill in all fields!');
		return false;
	} else {
		return true;
	}
}

export function changeHandlerNumbers(event) {
	const value = event.target.value;
	event.target.value = value.replace(/\D/, '');
}
