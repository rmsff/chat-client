const initialState = {
	items: [],
	isLoading: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'MESSAGES:SET_ITEMS':
			return {
				...state,
				items: payload,
				isLoading: false,
			};
		case 'MESSAGES:ADD_MESSAGE':
			return {
				...state,
				items: [...state.items, payload],
				isLoading: false,
			};
		case 'MESSAGES:SET_IS_LOADING':
			return {
				...state,
				isLoading: payload,
			};
		case 'MESSAGES:REMOVE_MESSAGE':
			return {
				...state,
				items: state.items.filter(({ _id }) => _id !== payload),
			};
		default:
			return state;
	}
};
