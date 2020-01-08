import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from 'components';
import { validateField } from 'utils/helpers';

const SignUpForm = ({
	values,
	touched,
	errors,
	handleChange,
	handleBlur,
	handleSubmit,
	isSubmitting,
	//	success,
	status,
}) => {
	const renderRegistrationConfirmation = () => (
		<div className="auth__success-block" style={{ lineHeight: '2' }}>
			<div>
				<Icon type="info-circle" theme="twoTone" />
			</div>
			<h2 style={{ fontSize: '24px' }}>Подтвердите свой аккаунт</h2>
			<p style={{ fontSize: '16px' }}>
				На указанный Вами E-mail отправлено письмо со cсылкой для подтверждения аккаунта.
			</p>
		</div>
	);

	const renderRegistrationForm = () => (
		<Form onSubmit={handleSubmit} className="signin-form">
			<Form.Item
				validateStatus={validateField('email', touched, errors)}
				help={touched.email && errors.email}
				hasFeedback>
				<Input
					disabled={isSubmitting}
					id="email"
					prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
					type="email"
					value={values.email}
					placeholder="E-mail"
					size="large"
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</Form.Item>
			<Form.Item
				validateStatus={validateField('fullname', touched, errors)}
				help={touched.fullname && errors.fullname}
				hasFeedback>
				<Input
					disabled={isSubmitting}
					id="fullname"
					prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
					type="name"
					value={values.fullname}
					placeholder="Имя"
					size="large"
					onChange={handleChange}
					onBlur={handleBlur}
				/>
			</Form.Item>
			<Form.Item
				validateStatus={validateField('password', touched, errors)}
				help={touched.password && errors.password}
				hasFeedback>
				<Input
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
			<Form.Item
				validateStatus={validateField('password_2', touched, errors)}
				help={touched.password_2 && errors.password_2}
				hasFeedback>
				<Input
					disabled={isSubmitting}
					id="password_2"
					prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
					type="password"
					placeholder="Повторите пароль"
					size="large"
					value={values.password_2}
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
					Зарегистрироваться
				</Button>
			</Form.Item>
			<Link className="auth__signup-link" to="/signin">
				Войти в аккаунт
			</Link>
		</Form>
	);

	return (
		<div>
			{!status && (
				<div className="auth__top">
					<h2>Регистрация</h2>
					<br />
					<p>Для использования чата, Вам нужно </p>
					<p>зарегистрироваться</p>
				</div>
			)}
			<Block>
				{status ? renderRegistrationConfirmation() : renderRegistrationForm()}
			</Block>
		</div>
	);
};

export default SignUpForm;
