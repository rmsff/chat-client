import tinycolor from "tinycolor2";

const getCorrectIndex = idx =>
	({
		[idx > 255]: 255,
		[idx < 0]: 0,
		[256 > idx && idx > 0]: idx,
	}[true]);

export default hash => {
	const [r, g, b] = hash
		.substr(0, 3)
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
