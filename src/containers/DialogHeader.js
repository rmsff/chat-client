import React from 'react';
import { connect } from 'react-redux';

import { DialogHeader } from 'components';

const mapStateToProps = ({ dialogs: { items, currentDialogId }, user }) => {
	const currentDialog = items.find(dialog => dialog._id === currentDialogId);
	const partner = currentDialog && (currentDialog.author._id === user.data._id ? currentDialog.partner : currentDialog.author);
	const { fullname = '', isOnline = '' } = partner || {};
	return { currentDialogId,  partnerFullname: fullname, partnerIsOnline: isOnline };
};

const DialogHeaderContainer = (props) => {
	return <DialogHeader {...props} />;
};

export default connect(mapStateToProps)(DialogHeaderContainer);
