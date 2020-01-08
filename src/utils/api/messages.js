import { axios } from 'core';

export default {
  getAllByDialogId: dialogId => axios.get(`/messages?dialog=${dialogId}`),
  submitMessage: messageData => axios.post('/messages/', messageData),
  removeMessage: id => axios.delete(`/messages?id=${id}`),
}
