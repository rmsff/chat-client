import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { SignInForm, SignUpForm } from 'modules';
import VerifyEmail from './components/VerifyEmail';
import './Auth.scss';

const Auth = ({ isAuth }) => {
	return (
		<section className="auth">
			<div className="auth__content">
				<Route exact path={['/', '/signin']} component={SignInForm} />
				<Route path="/signup" component={SignUpForm} />
				<Route path="/verify_email" component={VerifyEmail} />
				{isAuth && <Redirect to="/im" />}
			</div>
		</section>
	);
};

export default connect(({ user: { isAuth } }) => ({ isAuth }))(Auth);
