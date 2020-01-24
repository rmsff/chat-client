const initialState = []

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'ATTACHMENTS:SET_FILES':
			return payload;
		default:
			return state;
	}
};
