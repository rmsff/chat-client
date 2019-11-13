import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import classnames from 'classnames';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import './ChatInput.scss';

const { TextArea } = Input;

const ChatInput = props => {
	const [value, setValue] = useState('');
	const [emojiPickerVisible, setShowEmojiPicker] = useState(false);

	const toggleEmojiPicker = () => setShowEmojiPicker(!emojiPickerVisible);

	return (
		<div className="chat-input">
			<div className="chat-input__smile-btn">
				{emojiPickerVisible && <div className="chat-input__emoji-picker">
					<Picker set="apple" />
				</div>}
				<Button onClick={toggleEmojiPicker} type="ghost" shape="circle" icon="smile" />
			</div>
			<Input placeholder="Введите сообщение" onChange={e => setValue(e.target.value)} />
			{/* <TextArea autoSize={{ minRows: 1, maxRows: 6 }} placeholder="Введите сообщение" /> */}
			<div className="chat-input__actions">
				<UploadField
					onFiles={files => console.log(files)}
					containerProps={{
						className: 'chat-input__actions-upload-btn',
					}}
					uploadProps={{
						accept: '.jpg,.jpeg,.png,.gif,.bmp,',
						multiple: 'multiple',
					}}>
					<Button type="ghost" shape="circle" icon="camera" />
				</UploadField>

				{value ? (
					<Button type="ghost" shape="circle" icon="right" />
				) : (
					<Button type="ghost" shape="circle" icon="audio" />
				)}
			</div>
		</div>
	);
};

ChatInput.propTypes = {
	className: PropTypes.string,
};

export default ChatInput;
