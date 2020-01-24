import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './Status.scss';

const Status = ({ online }) => (
	<span className={classnames('status', { 'status--online': online })}>
		{online ? 'Онлайн' : 'Не в сети'}
	</span>
);

Status.propTypes = {
	className: PropTypes.string,
};

export default Status;
