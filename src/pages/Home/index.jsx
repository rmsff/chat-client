import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import { Messages, ChatInput, DialogHeader, Sidebar } from 'containers';
import { connect } from 'react-redux';
import { dialogsActions } from 'redux/actions';

import './Home.scss';

const mapStateToProps = state => {
	const { setCurrentDialogId, dialogs: { currentDialogId} } = state;
	return {
		setCurrentDialogId,
		currentDialogId,
	};
};

const Home = props => {
	const {
		setCurrentDialogId,
		currentDialogId,
		location: { pathname },
	} = props;

	useEffect(() => {
		const dialogId = pathname.split('/')[2] || '';
		setCurrentDialogId(dialogId);
	}, [pathname, setCurrentDialogId]);

	return (
		<section className="home">
			<div className="chat">
				<Sidebar />
				<div className="chat__dialog">
					{currentDialogId !== '' && <DialogHeader />}
					<div className="chat__dialog-messages">
						<Messages />
					</div>
					<div className="chat__dialog-input">
						{currentDialogId !== '' && <ChatInput />}
					</div>
				</div>
			</div>
		</section>
	);
};

export default withRouter(connect(mapStateToProps, dialogsActions)(Home));
