const initialState = []

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FILELIST:SET_FILELIST':
			return [...payload];
		default:
			return state;
	}
};
