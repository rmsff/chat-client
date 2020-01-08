import React from 'react';
import { connect } from 'react-redux';

import { DialogHeader } from 'components';

const mapStateToProps = ({
	dialogs: { currentDialog: { currentDialogId, partnerFullname, partnerIsOnline} },
}) => ({
	currentDialogId,
	partnerFullname,
	partnerIsOnline,
});

const DialogHeaderContainer = props => {
	return <DialogHeader {...props} />;
};

export default connect(mapStateToProps)(DialogHeaderContainer);
