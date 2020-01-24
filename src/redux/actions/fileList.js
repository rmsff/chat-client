export default {
	setFileList: fileList => dispatch => {
		dispatch({
			type: 'FILELIST:SET_FILELIST',
			payload: [...fileList],
		});
	},
};
