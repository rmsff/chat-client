import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import { Messages as BaseMessages } from 'components';
import { messagesActions } from 'redux/actions';

const mapStateToProps = ({ dialogs, messages }) => ({
	currentDialogId: dialogs.currentDialogId,
	items: messages.items,
	isLoading: messages.isLoading,
});

const Messages = ({ currentDialogId, fetchMessages, items, isLoading }) => {
	const messagesRef = useRef(null);

	useEffect(() => {
		if (currentDialogId) {
			fetchMessages(currentDialogId);
		}
	}, [currentDialogId, fetchMessages]);

	useEffect(() => {
		if (messagesRef.current) {
			messagesRef.current.scrollTo(0, messagesRef.current.scrollHeight);
		}
	}, [items]);

	return <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />;
};

export default connect(
	mapStateToProps,
	messagesActions
)(Messages);
