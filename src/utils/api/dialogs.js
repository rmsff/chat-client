import { axios } from 'core';

export default {
	getAll: () => axios.get('/dialogs'),
	create: postData => axios.post('/dialogs', postData),
};
