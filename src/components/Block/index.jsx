import React from 'react';
import classnames from 'classnames';
import './Block.scss';

export default ({ children, className }) => (
  <div className={classnames('block', className)}>{children}</div>
);
