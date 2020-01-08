import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Dialogs as BaseDialogs } from 'components';
import { dialogsActions } from 'redux/actions';
import socket from 'core/socket';

const mapStateToProps = ({
	dialogs,
	user: {
		data: { _id },
	},
}) => ({
	...dialogs,
	myId: _id,
});

const Dialogs = ({ fetchDialogs, setCurrentDialogId, currentDialog, items, myId }) => {
	const [inputValue, setValue] = useState('');
	const [filtered, setFilteredItems] = useState(Array.from(items));

	useEffect(() => {
		if (!items.length) {
			fetchDialogs();
		} else {
			setFilteredItems(items);
		}

		const onNewDialog = newDialog => fetchDialogs(); //  refactoring
		socket.on('SERVER:DIALOG_CREATED', onNewDialog);
		return () => socket.removeListener('SERVER:DIALOG_CREATED', onNewDialog);
	}, [fetchDialogs, items]);

	const onChangeInput = value => {
		const newItems = items.filter(({ author, partner }) => {
			const lowerValue = value.toLowerCase();
			const name = author._id === myId ? partner.fullname : author.fullname;
			const lowerName = name.toLowerCase();
			return lowerName.indexOf(lowerValue) >= 0;
		});
		setFilteredItems(newItems);
		setValue(value);
	};

	return (
		<BaseDialogs
			items={filtered}
			onSearch={onChangeInput}
			inputValue={inputValue}
			currentDialog={currentDialog}
			onSelectDialog={setCurrentDialogId}
			myId={myId}
		/>
	);
};

export default connect(mapStateToProps, dialogsActions)(Dialogs);
