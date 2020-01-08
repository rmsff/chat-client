import { axios } from 'core';

export default {
	signIn: postData => axios.post('/user/signin', postData),
	signUp: postData => axios.post('/user/signup', postData),
	verifyUser: hash => axios.post(`/user/verify?hash=${hash}`),
	getMe: () => axios.get('/user/me'),
	findUsers: (name) => axios.get(`/user/find?name=${name}`),
};
