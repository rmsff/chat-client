import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import App from './App';
import store from 'redux/store';
import './styles/index.scss';
import 'emoji-mart/css/emoji-mart.css';

ReactDOM.render(
	<Provider store={store}>
		<HashRouter>
			<App />
		</HashRouter>
	</Provider>,
	document.getElementById('root')
);
