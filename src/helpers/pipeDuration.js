// a helper to format course duration
export default function pipeDuration(duration) {
	let hours = Math.trunc(duration / 60);
	let minutes = duration % 60;
	return hours + ':' + (minutes < 10 ? '0' + minutes : minutes);
}
