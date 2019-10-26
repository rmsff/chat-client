import React, { Component } from 'react';
import { Form, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from 'components';

export default class RegisterForm extends Component {
  renderRegistrationConfirmation = () => {
    return (
      <div className='auth__success-block'>
        <div>
          <Icon type='info-circle' theme='twoTone' />
        </div>
        <h2>Подтвердите свой аккаунт</h2>
        <p>На указанный Вами E-mail отправлено письмо со сылкой для подтверждения аккаунта.</p>
      </div>
    )
  };
  
  renderRegistrationForm = () => {
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item validateStatus="success" hasFeedback>
          <Input
            prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="E-mail"
            size='large'
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Имя"
            size='large'
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Пароль"
            size='large'
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Повторите пароль"
            size='large'
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button" size='large'>
            Зарегистрироваться
          </Button>
        </Form.Item>
        <Link className='auth__register-link' to='/login'>
          Войти в аккаунт
        </Link>
      </Form>
    );
  };

  render () {
    const { success } = this.props;
    return (
      <div>
        <div className='auth__top'>
          <h2>Регистрация</h2>
          <p>Для входа в чат, Вам нужно зарегистрироваться</p>
        </div>
        <Block>
          {success
            ? this.renderRegistrationConfirmation()
            : this.renderRegistrationForm()}
        </Block>
      </div>
    )
  }
}