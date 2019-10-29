export default ({ isAuth, values }) => {
  let errors = {};
  
  const mapping = {
    email: (value) => {
      if (!value) {
        errors.email = 'Введите E-mail адрес';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        errors.email = 'Неправильный E-mail адрес';
      }
    },
    password: (value) => {
      if (!value) {
        errors.password = 'Введите пароль';
      } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
        errors.password = isAuth ? 'Неверный пароль. Попробуйте еще.' : 'Пароль должен содержать хотя бы одну заглавную и прописную букву и одну цифру';
      }
    },
  }

  Object.keys(values).forEach(key => mapping[key] && mapping[key](values[key]));

  return errors;
};
