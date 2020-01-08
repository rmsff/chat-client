export default ({ isAuth, values }) => {
	let errors = {};

	const mapping = {
		email: value => {
			if (!value) {
				errors.email = 'Введите E-mail адрес';
			} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
				errors.email = 'Некорректный E-mail адрес';
			}
		},
		fullname: value => {
			if (!value) {
				errors.fullname = 'Введите имя';
			} else if (
				!/^([a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$)/.test(value)
			) {
				errors.fullname = 'Имя должно содержать не менее двух букв';
			}
		},
		password: value => {
			if (!value) {
				errors.password = 'Введите пароль';
			} else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
				errors.password = isAuth
					? 'Некорректный пароль. Попробуйте еще.'
					: 'Пароль должен состоять минимум из 8 символов и содержать хотя бы одну заглавную, прописную букву, цифру';
			}
		},
		password_2: value => {
			if (!value) {
				errors.password_2 = 'Введите пароль повторно';
			} else if (value !== values.password) {
				errors.password_2 = 'Пароли не совпадают';
			}
		},
	};

	Object.keys(values).forEach(key => mapping[key] && mapping[key](values[key]));

	return errors;
};
