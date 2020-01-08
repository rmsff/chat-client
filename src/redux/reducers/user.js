const initialState = {
	data: window.localStorage.user && JSON.parse(window.localStorage.user) || '',
	token: window.localStorage.token || '',
	isAuth: !!window.localStorage.token,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'USER:SET_DATA':
			return {
				...state,
				data: payload.user,
				isAuth: payload.isAuth,
				token: payload.token,
			};
		default:
			return state;
	}
};
