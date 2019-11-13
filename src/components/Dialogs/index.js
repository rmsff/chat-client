import React from 'react';
import { DialogItem } from 'components';
import { Input, Empty, Button } from 'antd';
import { sortBy } from 'lodash';
import './Dialogs.scss';

const Dialogs = ({
	items,
	userId,
	onSearch,
	inputValue,
	onSelectDialog,
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
							<a href="#API">Диалогов не найдено</a>
						</span>
					}>
					<Button type="primary">Написать кому-нибудь?</Button>
				</Empty>
			);
		}
		const sorted = sortBy(items, dialog => new Date(dialog.created_at)).reverse();
		return (
			<div className="dialogs">
				{sorted.map(({ _id, text, isReaded, created_at, user }) => (
					<DialogItem
						key={_id}
						_id={_id}
						user={user}
						message={text}
						isMe={true}
						created_at={created_at}
						onSelect={onSelectDialog}
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
