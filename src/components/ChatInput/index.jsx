import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'antd';
import { Picker } from 'emoji-mart';

import { UploadFilesPicker } from 'containers';
import './ChatInput.scss';

const ChatInput = ({
	currentDialogId,
	emojiPickerVisible,
	onToggleEmojiPicker,
	onAddEmoji,
	uploadFilesPickerVisible,
	onToggleUploadFilesPicker,
	value,
	onChange,
	onKeyUpSubmitMessage,
	onClickSubmitMessage,
}) => {
	return (
		currentDialogId !== '' && (
			<Fragment>
				<div className="chat-input">
					<div id="chat-input__smile-btn_id" className="chat-input__smile-btn">
						{emojiPickerVisible && (
							<div id="emoji_picker_id" className="chat-input__emoji-picker">
								<Picker onSelect={onAddEmoji} autoFocus={true} set="apple" />
							</div>
						)}
						<Button
							onClick={onToggleEmojiPicker}
							type="ghost"
							shape="circle"
							icon="smile"
						/>
					</div>
					<Input.TextArea
						autoSize={{ minRows: 1, maxRows: 15 }}
						placeholder="Введите сообщение"
						onChange={onChange}
						onKeyUp={onKeyUpSubmitMessage}
						value={value}
					/>
					<div className="chat-input__actions">
						<Button
							onClick={onToggleUploadFilesPicker}
							type="ghost"
							shape="circle"
							icon="plus"
						/>
						{value ? (
							<Button
								onClick={onClickSubmitMessage}
								type="ghost"
								shape="circle"
								icon="right"
							/>
						) : (
							<Button type="ghost" shape="circle" icon="audio" />
						)}
					</div>
				</div>
				{uploadFilesPickerVisible && <UploadFilesPicker />}
			</Fragment>
		)
	);
};

ChatInput.propTypes = {
	className: PropTypes.string,
};

export default ChatInput;
