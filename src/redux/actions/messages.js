import { messagesApi } from 'utils/api';

const actions = {
	setMessages: items => ({
		type: 'MESSAGES:SET_ITEMS',
		payload: items,
	}),
	setIsLoading: stateIsLoaing => ({
		type: 'MESSAGES:SET_IS_LOADING',
		payload: stateIsLoaing,
	}),
	fetchMessages: dialogId => dispatch => {
		dispatch(actions.setIsLoading(true));
		messagesApi.getAllByDialogId(dialogId).then(({ data }) => {
			dispatch(actions.setMessages(data));
		}).catch(() => dispatch(actions.setIsLoading(false)));
	},
};

export default actions;
