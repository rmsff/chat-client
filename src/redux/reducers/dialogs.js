const initialState = {
	items: [],
	currentDialog: {
		currentDialogId: '',
		partnerFullname: '',
		partnerIsOnline: '',
		partnerId: '',
	},
	isLoading: false,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case 'DIALOGS:SET_ITEMS':
			return {
        ...state,
				items: payload,
			};
		case 'DIALOGS:SET_CURRENT_DIALOG_ID': {
			const dialog = state.items.filter((dialog) => payload.dialogId === dialog._id)[0];
			const partner = dialog.author._id === payload.myId ? dialog.partner : dialog.author;
			return {
        ...state,
				currentDialog: {
					...state.currentDialog,
					currentDialogId: payload.dialogId,
					partnerFullname: partner.fullname,
					partnerIsOnline: partner.isOnline,
					partnerId: partner._id,
				},
				isLoading: true,
			};
		}
		default:
			return state;
	}
};
