import React from 'react';
import PropTypes from 'prop-types';

import { Message } from 'components';
import { Empty, Button, Spin } from 'antd';

import './Messages.scss';

const Messages = ({ blockRef, isLoading, items, myId, handleRemoveMessage }) => {
	if (items.length) {
		return (
			<div className="messages" ref={blockRef}>
				<div className="height2000" style={{ height: '2000px' }} />
				{items.map(item => {
					const isMe = myId === item.user._id || myId === item.user;
					return (
						<Message
							key={item._id}
							{...item}
							isMe={isMe}
							handleRemoveMessage={handleRemoveMessage}
						/>
					);
				})}
			</div>
		);
	}

	if (isLoading) {
		return (
			<div className="messages" ref={blockRef}>
				<div className="height2000" style={{ height: '2000px' }} />
				<Spin size="large" tip="Загрузка сообщений..." />
				<div className="height2000" style={{ height: '2000px' }} />
			</div>
		);
	}

	return (
		<div className="messages" ref={blockRef}>
			<div className="height2000" style={{ height: '2000px' }} />
			<Empty
				image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
				imageStyle={{
					height: 60,
				}}
				description={
					<span>
						<a href="#API">Здесь совсем пусто</a>
					</span>
				}>
				<p>Выберите диалог или </p>
				<Button type="primary" style={{ marginTop: '5px' }}>
					напишите кому-нибудь!
				</Button>
			</Empty>
			<div className="height2000" style={{ height: '2000px' }} />
		</div>
	);
};

Messages.propTypes = {
	items: PropTypes.array,
};

export default Messages;
