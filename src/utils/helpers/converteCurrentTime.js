export default currentTime => {
	const mins = Math.floor(currentTime / 60);
	const secs = (currentTime % 60).toFixed();
	return `${mins < 10 ? 0 : ''}${mins}:${secs < 10 ? 0 : ''}${secs}`;
};
