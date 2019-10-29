import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from 'components';
import { isValid } from 'date-fns';
import { validateField } from 'utils/helpers';

const RegisterForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,

    success,
  } = props;

  const renderRegistrationConfirmation = () => (
    <div className='auth__success-block'>
      <div>
        <Icon type='info-circle' theme='twoTone' />
      </div>
      <h2>Подтвердите свой аккаунт</h2>
      <p>На указанный Вами E-mail отправлено письмо со сылкой для подтверждения аккаунта.</p>
    </div>
  );
  
  const renderRegistrationForm = () => (
    <Form onSubmit={handleSubmit} className="login-form">
      <Form.Item
        validateStatus={validateField('email', touched, errors)}
        help={touched.email && errors.email}
        hasFeedback
      >
        <Input
          id='email'
          prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder="E-mail"
          value={values.email}
          size='large'
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="name"
          placeholder="Имя"
          size='large'
        />
      </Form.Item>
      <Form.Item 
        validateStatus={validateField('password', touched, errors)}
        help={touched.password && errors.password} 
        hasFeedback>
        <Input
          id='password'
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password"
          placeholder="Пароль"
          size='large'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </Form.Item>
      <Form.Item>
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          type="password2"
          placeholder="Повторите пароль"
          size='large'
        />
      </Form.Item>
      <Form.Item>
        {isSubmitting && isValid && <span>Ошибка</span>}
        <Button onClick={handleSubmit} type="primary" size='large'>
          Зарегистрироваться
        </Button>
      </Form.Item>
      <Link className='auth__register-link' to='/login'>
        Войти в аккаунт
      </Link>
    </Form>
  );

  return (
    <div>
      <div className='auth__top'>
        <h2>Регистрация</h2>
        <p>Для входа в чат, Вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {success
          ? renderRegistrationConfirmation()
          : renderRegistrationForm()}
      </Block>
    </div>
  )
};

export default RegisterForm;