import React, { useState } from 'react';
import { connect } from 'react-redux';
import { userApi, dialogsApi } from 'utils/api';

import { Sidebar } from 'components';
import { openNotification } from 'utils/helpers';

const SidebarContainer = ({ data }) => {
	const [visible, setVisible] = useState(false);
	const [usersInputValue, setUsersInputValue] = useState('');
	const [messageText, setMessageText] = useState('');
	const [users, setUsers] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [selectedUser, setSelectedUser] = useState('');

	const handleShowModal = () => setVisible(true);
	const handleCancel = () => {
		setUsersInputValue('');
		setMessageText('');
		setVisible(false);
		setSelectedUser('');
	};
	const handleChangeUsersInput = value => setUsersInputValue(value);
	const handleChangeMessageText = event => {
		event.preventDefault();
		setMessageText(event.target.value);
	};
	const handleSearch = async value => {
		if (value !== '') {
			setIsLoading(true);
			try {
				const { data } = await userApi.findUsers(value);
				setUsers(data);
				setIsLoading(false);
			} catch (err) {
				openNotification({
					type: 'error',
					message: 'Ошибка',
					description:
						'При поиске собеседника возникла неизвестная ошибка. Сервер не ответил.',
					duration: 8,
				});
				setIsLoading(false);
			}
		}
	};
	const handleSelectUser = key => setSelectedUser(key);
	const handleCreateDialog = async () => {
		if (selectedUser !== '') {
			try {
				setIsLoading(true);
				await dialogsApi.create({
					partner: selectedUser,
					text: messageText,
				});
				setIsLoading(false);
				setVisible(false);
				setUsersInputValue('');
				setMessageText('');
			} catch (err) {
				openNotification({
					type: 'error',
					message: 'Ошибка создания диалога',
					description:
						'Произошла ошибка при создании диалога. Пожалйста, обратитесь к нам, чтобы мы могли это исправить.',
					duration: 8,
				});
				setIsLoading(false);
			}
		}
	};

	return (
		<Sidebar
			user={data}
			users={users}
			visible={visible}
			usersInputValue={usersInputValue}
			messageText={messageText}
			selectedUser={selectedUser}
			isLoading={isLoading}
			handleShowModal={handleShowModal}
			handleCreateDialog={handleCreateDialog}
			handleCancel={handleCancel}
			handleChangeUsersInput={handleChangeUsersInput}
			handleChangeMessageText={handleChangeMessageText}
			handleSearch={handleSearch}
			handleSelectUser={handleSelectUser}
		/>
	);
};

export default connect(
	({ user: { data } }) => ({ data })
)(SidebarContainer);
