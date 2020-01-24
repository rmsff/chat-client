import React from 'react';
import { Upload, Icon, Modal } from 'antd';

import './UploadFilesPicker.scss';

const UploadFilesPicker = ({
	onCancel,
	onPreview,
	onChange,
	onRemove,
	previewImage,
	previewVisible,
	fileList,
}) => {
	const uploadButton = (
		<div>
			<Icon type="plus" />
			<div className="ant-upload-text">Upload</div>
		</div>
	);
	return (
		<div className="chat-input__attachments">
			<Upload
				accept={'.jpg, .jpeg, .png'}
				multiple={true}
				action={'/files'}
				headers={{ token: window.localStorage.token }}
				listType="picture-card"
				fileList={fileList}
				onPreview={onPreview}
				onChange={onChange}
				onRemove={onRemove}>
				{fileList.length >= 20 ? null : uploadButton}
			</Upload>
			<Modal visible={previewVisible} footer={null} onCancel={onCancel}>
				<img alt="example" style={{ width: '100%' }} src={previewImage} />
			</Modal>
		</div>
	);
};

export default UploadFilesPicker;
