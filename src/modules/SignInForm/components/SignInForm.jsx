import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from 'components';
import { validateField } from 'utils/helpers';

export default ({
	values,
	touched,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting,
	isValid,
}) => {
	const handleSubmitForm = (event) => {
		event.preventDefault();
		event.keyCode === 13 && handleSubmit(event);
	}
	return (
		<div>
			<div className="auth__top">
				<h2>Войти в аккаунт</h2>
				<br />
				<p>Пожалуйста, введите логин и пароль</p>
			</div>
			<Block>
				<Form onSubmit={handleSubmit} className="signin-form">
					<Form.Item
						validateStatus={validateField('email', touched, errors)}
						help={touched.email && errors.email}
						hasFeedback>
						<Input onKeyUp={handleSubmitForm}
							disabled={isSubmitting}
							id="email"
							prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
							placeholder="E-mail"
							value={values.email}
							size="large"
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Form.Item>
					<Form.Item
						validateStatus={validateField('password', touched, errors)}
						help={touched.password && errors.password}
						hasFeedback>
						<Input onKeyUp={handleSubmitForm}
							disabled={isSubmitting}
							id="password"
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
							type="password"
							placeholder="Пароль"
							size="large"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
					</Form.Item>
					<Form.Item>
						<Button
							disabled={isSubmitting}
							onClick={handleSubmit}
							type="primary"
							size="large">
							Войти в аккаунт
						</Button>
					</Form.Item>
					<Link className="auth__signup-link" to="/signup">
						Зарегистрироваться
					</Link>
				</Form>
			</Block>
		</div>
	);
};
