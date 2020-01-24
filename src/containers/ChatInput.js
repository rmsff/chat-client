import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';
import { ChatInput } from 'components';

const mapStateToProps = ({
	attachments,
	submitMessage,
	dialogs: { currentDialogId },
}) => ({
	attachments,
	submitMessage,
	currentDialogId,
});

const ChatInputContainer = ({ submitMessage, currentDialogId, attachments }) => {
	const [value, setValue] = useState('');
	const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
	const [uploadFilesPickerVisible, setUploadFilesPickerVisible] = useState(false);

	const handleToggleEmojiPicker = () => setEmojiPickerVisible(true);
	const handleAddEmoji = emoji => {
		setValue(value + emoji.native);
		setEmojiPickerVisible(false);
	};

	const hundleToggleUploadFilesPicker = () =>
		setUploadFilesPickerVisible(!uploadFilesPickerVisible);
	const handleChange = event => {
		event.preventDefault();
		const { value } = event.target;
		if (event.nativeEvent.inputType === 'insertLineBreak') return;
		setValue(value);
	};
	const handleKeyUpSubmitMessage = event => {
		event.preventDefault();
		if (event.keyCode === 13 && event.shiftKey)
			setValue(event.nativeEvent.target.value + '\n');
		if (event.keyCode === 13 && !event.shiftKey && value !== '') {
			submitMessage({ text: value, dialog_id: currentDialogId, attachments });
			setValue('');
		}
	};
	const handleClickSubmitMessage = event => {
		event.preventDefault();
		submitMessage({ text: value, dialog_id: currentDialogId, attachments });
		setValue('');
	};

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
	}, [emojiPickerVisible, setEmojiPickerVisible]);

	return (
		<ChatInput
			currentDialogId={currentDialogId}
			emojiPickerVisible={emojiPickerVisible}
			onToggleEmojiPicker={handleToggleEmojiPicker}
			onAddEmoji={handleAddEmoji}
			uploadFilesPickerVisible={uploadFilesPickerVisible}
			onToggleUploadFilesPicker={hundleToggleUploadFilesPicker}
			value={value}
			onChange={handleChange}
			onKeyUpSubmitMessage={handleKeyUpSubmitMessage}
			onClickSubmitMessage={handleClickSubmitMessage}
		/>
	);
};

export default connect(mapStateToProps, messagesActions)(ChatInputContainer);
