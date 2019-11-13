import tinycolor from 'tinycolor2';

const getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);

const getCorrectIndex = idx =>
	({
		[idx > 255 || idx < 0]: getRandomArbitrary(0, 255),
		[256 > idx && idx > 0]: idx,
	}[true]);

export default hash => {
	const [r, g, b] = hash
		.substr(21, 24)
		.split('')
		.map(char => getCorrectIndex(char.charCodeAt()));

	return {
		color: tinycolor({ r, g, b })
			.lighten(10)
			.saturate(10)
			.toHexString(),
		colorLighten: tinycolor({ r, g, b })
			.lighten(30)
			.saturate(30)
			.toHexString(),
	};
};
