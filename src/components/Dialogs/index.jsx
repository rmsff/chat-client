import React from 'react';
import { DialogItem } from 'components';
import { Input, Empty } from 'antd';
import { sortBy } from 'lodash';
import './Dialogs.scss';

const Dialogs = ({
	myId,
	items,
	onSearch,
	inputValue,
	currentDialogId,
}) => {
	const renderDialogs = () => {
		if (items.length === 0) {
			return (
				<Empty
					image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
					imageStyle={{
						height: 60,
					}}
					description={
						<span>
							<a href=" ">Диалогов не найдено.</a>
							<br/>
							<a href=" ">Напишите кому-нибудь!</a>
						</span>
					}>
				</Empty>
			);
		}

		const sorted = sortBy(items, dialog => new Date(dialog.lastMessage.createdAt)).reverse();
		return (
			<div className="dialogs">
				{sorted.map(({ _id, author, partner, lastMessage }) => (
					<DialogItem
						key={_id}
						dialogId={_id}
						lastMessage={lastMessage}
						myId={myId}
						partner={myId === author._id ? partner : author}
						currentDialogId={currentDialogId}
					/>
				))}
			</div>
		);
	};

	return (
		<div className="chat__sidebar-dialogs">
			<div className="chat__sidebar-search">
				<Input.Search
					placeholder="Поиск диалогов"
					onChange={e => onSearch(e.target.value)}
					value={inputValue}
				/>
			</div>
			{renderDialogs()}
		</div>
	);
};

export default Dialogs;
