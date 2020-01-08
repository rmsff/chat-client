import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import './ChatInput.scss';

const ChatInput = ({ submitMessage, currentDialogId }) => {
	const [value, setValue] = useState('');
	const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

	useEffect(() => {
		const emojiPicker = document.getElementById('emoji_picker_id');
		const outsideClick = ({ target }) => {
			const emojiBtn = document.getElementById('chat-input__smile-btn_id');
			if (emojiPicker && !emojiPicker.contains(target) && !emojiBtn.contains(target))
				setEmojiPickerVisible(false);
		};
		if (emojiPickerVisible && emojiPicker) {
			document.addEventListener('click', outsideClick);
		}
		return () => {
			document.removeEventListener('click', outsideClick);
		};
	}, [emojiPickerVisible]);

	const toggleEmojiPicker = () => setEmojiPickerVisible(true);
	const addEmoji = emoji => {
		setValue(value + emoji.native);
		setEmojiPickerVisible(false);
	};
	const handleOnChange = event => {
		event.preventDefault();
		const { value } = event.target;
		if (event.nativeEvent.inputType === 'insertLineBreak') return;
		setValue(value);
	};
	const handleSubmitMessage = event => {
		event.preventDefault();
		if (event.keyCode === 13 && event.shiftKey)
			setValue(event.nativeEvent.target.value + '\n');
		if (event.keyCode === 13 && !event.shiftKey && value !== '') {
			submitMessage({ text: value, dialog_id: currentDialogId });
			setValue('');
		}
	};

	return (
		currentDialogId !== '' && (
			<div className="chat-input">
				<div id="chat-input__smile-btn_id" className="chat-input__smile-btn">
					{emojiPickerVisible && (
						<div id="emoji_picker_id" className="chat-input__emoji-picker">
							<Picker onSelect={addEmoji} autoFocus={true} set="apple" />
						</div>
					)}
					<Button onClick={toggleEmojiPicker} type="ghost" shape="circle" icon="smile" />
				</div>
				<Input.TextArea
					autoSize={{ minRows: 1, maxRows: 15 }}
					placeholder="Введите сообщение"
					onChange={handleOnChange}
					onKeyUp={handleSubmitMessage}
					value={value}
					//disabled={true}
				/>
				<div className="chat-input__actions">
					<UploadField
						onFiles={files => files}
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
		)
	);
};

ChatInput.propTypes = {
	className: PropTypes.string,
};

export default ChatInput;
