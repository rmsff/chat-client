import React from 'react';
import classnames from 'classnames';
import { Time, IconReaded, Avatar } from 'components';
import { Link } from 'react-router-dom';

const DialogItem = props => {
	const {
		dialogId,
		myId,
		partner,
		//user,
		//message,
		isReaded,
	//	unread,
	//	createdAt,
		onSelect,
		currentDialog: { currentDialogId },
		lastMessage,
	} = props;

	return (
		<Link to={`/dialog/${dialogId}`}>
			<div onClick={onSelect.bind(this, { dialogId, myId })}
				className={classnames('dialogs__item', {
					'dialogs__item--online': partner.isOnline,
					active: currentDialogId === dialogId,
				})}>
				<div className="dialogs__item-avatar">
					<Avatar user={partner} />
				</div>
				<div className="dialogs__item-info">
					<div className="dialogs__item-info-top">
						<b>{partner.fullname}</b>
						<span>
							<Time date={lastMessage.createdAt} />
						</span>
					</div>
					<div className="dialogs__item-info-bottom">
						<p>{lastMessage.text}</p>
						{<IconReaded isMe={myId === lastMessage.user_id} isReaded={isReaded} />}
						{lastMessage.unread && (
							<div className="dialogs__item-info-bottom-count">
								{lastMessage.unread > 9 ? '+9' : lastMessage.unread}
							</div>
						)}
					</div>
				</div>
			</div>
		</Link>
	);
};

export default DialogItem;
