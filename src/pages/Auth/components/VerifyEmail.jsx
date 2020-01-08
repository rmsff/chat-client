import React from 'react';
import { Redirect } from 'react-router-dom';
import { userApi } from 'utils/api';
import { openNotification } from 'utils/helpers';

export default ({ location }) => {
	const verifyEmail = () => {
		const hash = location.search.split('?hash=')[1];
		userApi
			.verifyUser(hash)
			.then(() => {
				openNotification({
					type: 'success',
					message: 'Аккаунт успешно подтвержден',
					description:
						'Вы можете войти и пользоваться чатом. \nМы рады, что теперь Вы с нами.',
					duration: 8,
				});
			})
			.catch(err => {
				openNotification({
					type: 'error',
					message: 'Ошибка подтверждения аккаунта',
					description:
						'Возможно, этот аккаунт уже был подтвержден ранее или аккаунт не был зарегистрован',
					duration: 8,
				});
			});
  };

	return (
		<div>
			{verifyEmail()}
			<Redirect to="/signin" />
		</div>
	);
};
