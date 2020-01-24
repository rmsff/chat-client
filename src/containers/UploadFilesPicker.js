import React, { useState } from 'react';
import { connect } from 'react-redux';

import { UploadFilesPicker } from 'components';
import { uploadApi } from 'utils/api';
import { attachmentsActions, fileListActions } from 'redux/actions';

const mapStateToProps = ({
	setAttachments,
	removeAttachments,
	fileList,
	setFileList,
}) => ({
	setAttachments,
	removeAttachments,
	fileList,
	setFileList,
});
const mapDispatchToProps = {
	...attachmentsActions,
	...fileListActions,
};

const UploadFilesPickerContainer = ({
	setAttachments,
	removeAttachments,
	fileList,
	setFileList,
}) => {
	const [previewVisible, setPreviewVisible] = useState(false);
	const [previewImage, setPreviewImage] = useState();

	const getBase64 = file => {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = () => resolve(reader.result);
			reader.onerror = error => reject(error);
		});
	};

	const handleCancel = () => setPreviewVisible(false);

	const handlePreview = async file => {
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setPreviewImage(file.url || file.preview);
		setPreviewVisible(true);
	};
	const handleChange = ({ fileList }) => {
		setAttachments(fileList);
		setFileList(fileList);
	};
	const handleRemove = file => {
		const fileId = file.response._id;
		uploadApi
			.remove(fileId)
			.then(() => removeAttachments(fileId))
			.catch(() => setFileList(fileList));
	};
	return (
		<UploadFilesPicker
			onCancel={handleCancel}
			onPreview={handlePreview}
			onChange={handleChange}
			onRemove={handleRemove}
			previewImage={previewImage}
			previewVisible={previewVisible}
			fileList={fileList}
		/>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(UploadFilesPickerContainer);
