import React from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';
import { ChatInput } from 'components';

const ChatInputContainer = ({ submitMessage, currentDialogId }) => {
	return <ChatInput submitMessage={submitMessage} currentDialogId={currentDialogId} />;
};

export default connect(
	({ submitMessage, dialogs: { currentDialog: { currentDialogId } } }) => ({
		submitMessage,
		currentDialogId,
	}),
	messagesActions
)(ChatInputContainer);
