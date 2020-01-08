import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Messages } from 'components';
import { messagesActions } from 'redux/actions';
import socket from 'core/socket';

const mapStateToProps = ({
	dialogs,
	messages,
	user: {
		data: { _id },
	},
}) => ({
	myId: _id,
	currentDialogId: dialogs.currentDialog.currentDialogId,
	items: messages.items,
	isLoading: messages.isLoading,
});

const MessagesContainer = ({
	currentDialogId,
	fetchMessages,
	addMessages,
	removeMessage,
	items,
	isLoading,
	myId,
}) => {
	const messagesRef = useRef(null);

	useEffect(() => {
		if (currentDialogId) {
			fetchMessages(currentDialogId);
		}
		const onNewMessage = newMessage => addMessages(newMessage);
		socket.on('SERVER:NEW_MESSAGE', onNewMessage);
		return () => socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
	}, [addMessages, currentDialogId, fetchMessages]);

	useEffect(() => {
		if (messagesRef.current) {
			messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
		}
	}, [items]);

	const handleRemoveMessage = messageId => () => removeMessage(messageId);

	return (
		<Messages
			blockRef={messagesRef}
			items={items}
			isLoading={isLoading}
			myId={myId}
			handleRemoveMessage={handleRemoveMessage}
		/>
	);
};

export default connect(mapStateToProps, messagesActions)(MessagesContainer);
