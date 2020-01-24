import { userApi } from 'utils/api';
import { openNotification } from 'utils/helpers';

const Actions = {
	setUserData: user => ({
		type: 'USER:SET_DATA',
		payload: {
			user,
			isAuth: true,
			token: window.localStorage.token
		},
	}),
	fetchUserSignIn: postData => dispatch => {
		return userApi.signIn(postData).then(({ data }) => {
			const { token, status, user } = data;
			const mapping = {
				success: () => {
					openNotification({
						type: 'success',
						message: 'Вы успешно авторизированы',
					});
					window.localStorage['token'] = token;
					window.localStorage['user'] = JSON.stringify(user);
					window.axios.defaults.headers.common['token'] = token;
					dispatch(Actions.setUserData(user));
				},
				error: () => {
					openNotification({
						type: 'error',
						message: 'Ошибка авторизации',
						description: 'Неверный логин или пароль',
					});
				},
			};
			mapping[status]();
			return data;
		});
	},
	fetchUserSignUp: postData => dispatch => {
		return userApi
			.signUp(postData)
			.then(({ data: { status } }) => {
				const mapping = {
					success: {
						type: 'success',
						message: 'Вы успешно зарегистрированы',
					},
					error: {
						type: 'error',
						message: 'Ошибка регистрации',
						description:
							'Такой пользовтель уже зарегистрирован. Попробуйте другой E-mail или войдите в свой аккаунт.',
						duration: 8,
					},
				};
				openNotification(mapping[status]);
				return status;
			})
			.catch(err => {
				const errorMessages = {
					500: 'Сервер не ответил. Возможно, имеются проблемы с интернетом',
					422: 'Вы ввели некорректныеданные',
				};
				openNotification({
					type: 'error',
					message: 'Ошибка регистрации',
					description: errorMessages[err.response.status],
					duration: 8,
				});
			});
	},
};

export default Actions;
