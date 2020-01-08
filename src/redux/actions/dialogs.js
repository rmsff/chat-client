import { dialogsApi } from 'utils/api';
import { openNotification } from 'utils/helpers';

const Actions = {
	setUserData: user => ({
		type: 'USER:SET_DATA',
		payload: user,
		isAuth: false,
	}),
	setDailogs: items => ({
		type: 'DIALOGS:SET_ITEMS',
		payload: items,
	}),
	setCurrentDialogId: payload => ({
		type: 'DIALOGS:SET_CURRENT_DIALOG_ID',
		payload,
	}),
	fetchDialogs: () => dispatch => {
		dialogsApi
			.getAll()
			.then(({ data }) => {
				data.length > 0 && dispatch(Actions.setDailogs(data));
			})
			.catch(err => {
				if (err.response.status === 403) {
					dispatch(
						Actions.setUserData({
							user: {},
							isAuth: false,
							token: '',
						})
					);
					window.localStorage.clear();
					openNotification({
						type: 'error',
						message: 'Ошибка авторизации',
						description: 'Сессия устарела. Пожалйста, войдите повторно.',
					});
				}
			});
	},
};

export default Actions;
