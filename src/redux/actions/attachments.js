export default {
	setAttachments: fileList => dispatch => {
		const attachments = fileList.reduce((accumulator, currentValue) => {
			const { response } = currentValue;
			if (response) {
				return [...accumulator, response._id];
			}
			return accumulator;
		}, []);
		dispatch({
			type: 'ATTACHMENTS:SET_FILES',
			payload: attachments,
		});
	},
	removeAttachments: fileId => (dispatch, getState) => {
		const {
			attachments,
		} = getState();
		const newAttachments = attachments.filter(item => item !== fileId);
		dispatch({
			type: 'ATTACHMENTS:SET_FILES',
			payload: newAttachments,
		});
	},
};
