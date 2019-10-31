import React from 'react';
import { DialogItem } from 'components';
import { sortBy } from 'lodash';
import './Dialogs.scss';

const Dialogs = ({ items, userId }) => {
	const sorted = sortBy(items, dialog => dialog.created_at).reverse();

	return (
		<div className="dialogs">
			{sorted.map(({ _id, text, isReaded, created_at, user }) => (
				<DialogItem
					key={_id}
					message={text}
					isMe={user._id === userId}
				/>
			))}
		</div>
	);




	// return (
	// 	<div className="dialogs">
	// 		{sorted.map(({ _id, text, isReaded, created_at, user }) => (
	// 			<DialogItem
	// 				id={_id}
	// 				user={user}
	// 				text={text}
	// 				isReaded={isReaded}
	// 				unreaded={Math.round(Math.random() * 10)}
	// 				created_at={created_at}
	// 				isMe={user._id === userId}
	// 			/>
	// 		))}
	// 	</div>
	// );
};

export default Dialogs;
