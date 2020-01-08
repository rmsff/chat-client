import React from 'react';
import PropTypes from 'prop-types';
import { generateAvatarFromHash } from 'utils/helpers';
import './Avatar.scss';

const Avatar = ({ user }) => { //{ fullname, _id, avatar }
	if (!'avatar') {
		return <img className="avatar" src="https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1"
			//avatar
			//'https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1'

		//	} alt={`User avatar ${fullname}`} />;
			 alt={`User avatar ${'fullnkkkkame'}`} />;
	} else {
		const { color, colorLighten } = generateAvatarFromHash('_id');
		const firstChar = '9'//fullname[0].toUpperCase();
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
	className: PropTypes.string,
};

export default Avatar;
