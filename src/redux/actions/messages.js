import { messagesApi } from 'utils/api';
import { openNotification } from 'utils/helpers';

const Actions = {
	setMessages: items => ({
		type: 'MESSAGES:SET_ITEMS',
		payload: items,
	}),
	addMessages: newMessage => (dispatch, getState) => {
		const {
			dialogs: { currentDialogId },
		} = getState();
		if (currentDialogId === newMessage.dialog._id)
			dispatch({
				type: 'MESSAGES:ADD_MESSAGE',
				payload: newMessage,
			});
	},
	setIsLoading: stateIsLoaing => ({
		type: 'MESSAGES:SET_IS_LOADING',
		payload: stateIsLoaing,
	}),
	fetchMessages: dialogId => dispatch => {
		dispatch(Actions.setIsLoading(true));
		messagesApi
			.getAllByDialogId(dialogId)
			.then(({ data }) => {
				dispatch(Actions.setMessages(data));
			})
			.catch(() => dispatch(Actions.setIsLoading(false)));
	},
	submitMessage: messageData => dispatch => {
		messagesApi
			.submitMessage(messageData)
			.then(() => {
				dispatch({
					type: 'FILELIST:SET_FILELIST',
					payload: [],
				});
				dispatch({
					type: 'ATTACHMENTS:SET_FILES',
					payload: [],
				});
			})
			.catch(() =>
				openNotification({
					type: 'error',
					message: 'Ошибка',
					description:
						'При отправке сообщения возникла ошибка. Пожалуйста, попробуйте еще!',
					duration: 5,
				})
			);
	},
	removeMessage: messageId => dispatch => {
		messagesApi
			.removeMessage(messageId)
			.then(() => {
				dispatch({
					type: 'MESSAGES:REMOVE_MESSAGE',
					payload: messageId,
				});
			})
			.catch(err => {
				openNotification({
					type: 'error',
					message: 'Ошибка',
					description:
						'При удалении сообщения возникла ошибка. Пожалуйста, напишите нам, чтобы мы могли это исправить.',
					duration: 8,
				});
			});
	},
};

export default Actions;
