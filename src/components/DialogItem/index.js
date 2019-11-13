import React from 'react';
import classnames from 'classnames';
import { Time, IconReaded, Avatar } from 'components';

const DialogItem = ({
	_id,
	user,
	message,
	isMe,
	isReaded,
	unreaded,
	created_at,
	onSelect,
	currentDialogId,
}) => (
	<div
		className={classnames('dialogs__item', { 'dialogs__item--online': user.isOnline, "active": currentDialogId === _id })}
		onClick={onSelect.bind(this, _id)}>
		<div className="dialogs__item-avatar">
			<Avatar user={user} />
		</div>
		<div className="dialogs__item-info">
			<div className="dialogs__item-info-top">
				<b>{user.fullname}</b>
				<span>
					<Time date={created_at} />
				</span>
			</div>
			<div className="dialogs__item-info-bottom">
				<p>{message}</p>
				{<IconReaded isMe={isMe} isReaded={isReaded} />}
				{unreaded && (
					<div className="dialogs__item-info-bottom-count">
						{unreaded > 9 ? '+9' : unreaded}
					</div>
				)}
			</div>
		</div>
	</div>
);

export default DialogItem;
