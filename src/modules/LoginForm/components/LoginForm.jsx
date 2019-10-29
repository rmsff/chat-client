import React from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from 'components';
import { validateField } from 'utils/helpers';

export default props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,

    success,
  } = props;
  
  return (
    <div>
      <div className='auth__top'>
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
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
            {isSubmitting && isValid && <span>Ошибка</span>}
            <Button onClick={handleSubmit} type="primary" size='large'>
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link className='auth__register-link' to='/register'>
            Зарегистрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
}
