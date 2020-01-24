import React from 'react';
import { Button } from 'antd';

import { Status } from 'components';

import './DialogHeader.scss';

const DialogHeader = ({
	currentDialogId,
	partnerFullname,
	partnerIsOnline,
}) => {
	return currentDialogId !== '' && (
		<div className="chat__dialog-header">
			<div />
			<div className="chat__dialog-header-center">
				<b className="chat__dialog-header-username">{partnerFullname}</b>
				<div className="chat__dialog-header-status">
					<Status online={partnerIsOnline} />
				</div>
			</div>
			<Button type="ghost" shape="circle" icon="ellipsis" />
		</div>
	);
};

export default DialogHeader;
