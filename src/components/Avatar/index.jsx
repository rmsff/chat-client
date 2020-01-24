import React from 'react';
import PropTypes from 'prop-types';
import { generateAvatarFromHash } from 'utils/helpers';
import './Avatar.scss';

const Avatar = ({ user: { _id, fullname, avatar } }) => {
	if (avatar) {
		return (
			<img
				className="avatar"
				src={avatar}
				alt={`User avatar ${fullname}`} />
		);
	} else {
		const { color, colorLighten } = generateAvatarFromHash(_id);
		const firstChar = fullname[0].toUpperCase();
		return (
			<div
				className="avatar avatar--symbol"
				style={{
					background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`,
				}}>
				{firstChar}
			</div>
		);
	}
};

Avatar.propTypes = {
	user: PropTypes.object,
};

export default Avatar;
