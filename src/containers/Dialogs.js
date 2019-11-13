import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Dialogs as BaseDialogs } from 'components';
import { dialogsActions } from 'redux/actions';

const mapStateToProps = props => {
	// {"dialogs":{"items":[],"currentDialog":null},"messages":{"items":[]}}
	// console.log(JSON.stringify(props.dialogs))

	return { ...props.dialogs };
};

const Dialogs = ({ fetchDialogs, setCurrentDialogId, currentDialogId, items, userId }) => {
	const [inputValue, setValue] = useState('');
	const [filtered, setFilteredItems] = useState(Array.from(items));

	const onChangeInput = value => {
		const newItems = items.filter(dialog => {
			const lowerName = dialog.user.fullname.toLowerCase();
			const lowerValue = value.toLowerCase();
			return lowerName.indexOf(lowerValue) >= 0;
		});
		setFilteredItems(newItems);
		setValue(value);
	};

	useEffect(() => {
		if (!items.length) {
			fetchDialogs();
		} else {
			setFilteredItems(items);
		}
	}, [fetchDialogs, items]);

	return (
		<BaseDialogs
			items={filtered}
			onSearch={onChangeInput}
			inputValue={inputValue}
			onSelectDialog={setCurrentDialogId}
			currentDialogId={currentDialogId}
		/>
	);
};

export default connect(
	mapStateToProps,
	dialogsActions
)(Dialogs);
