import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Auth, Home } from './pages';

const App = ({ isAuth }) => {
	const render = () => (isAuth ? <Home /> : <Redirect to="/signin" />);
	return (
		<div className="wrapper">
			<Switch>
				<Route exact path={['/signin', '/signup', '/verify_email']} component={Auth} />
				<Route path="/" render={render} />
			</Switch>
		</div>
	);
};

export default connect(({ user: { isAuth } }) => ({ isAuth }))(App);
