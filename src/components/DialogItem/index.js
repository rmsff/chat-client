import React from 'react';
import classnames from 'classnames';
import { Time, IconReaded } from 'components';
import './DialogItem.scss';

const getAvatar = ({ avatar }) => {
	if (avatar) {
		return (
			<img
				src={avatar}
				alt={`User avatar ${avatar}`}
			/>
		);
	} else {
		// make avatar
	}
};

const DialogItem = ({ user, message, isMe, isReaded, unreaded, created_at }) => (
	<div className={classnames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
		<div className="dialogs__item-avatar">
			{/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
			{getAvatar(user)}
		</div>
		<div className="dialogs__item-info">
			<div className="dialogs__item-info-top">
				<b>{user.fullname}</b>
				<span>
					{''}
					<Time date={created_at} />
				</span>
			</div>
			<div className="dialogs__item-info-bottom">
				<p>{message}</p>
				{<IconReaded isMe={isMe} isReaded={isReaded} />}
				{unreaded && (
					<div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>
				)}
			</div>
		</div>
	</div>
);

export default DialogItem;
