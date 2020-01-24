import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Popover, Button } from 'antd';

import { Time, IconReaded, Avatar } from 'components';
import { converteCurrentTime } from 'utils/helpers';
import { uniqueId } from 'lodash';

import waveSvg from 'assets/img/wave.svg';
import playSvg from 'assets/img/play.svg';
import pauseSvg from 'assets/img/pause.svg';

import './Message.scss';

const MessageAudio = ({ audio }) => {
	const audioElem = useRef(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		audioElem.current.volume = '0.9';
		audioElem.current.addEventListener('playing', () => setIsPlaying(true), false);
		audioElem.current.addEventListener('ended', () => setIsPlaying(false), false);
		audioElem.current.addEventListener('pause', () => setIsPlaying(false), false);
		audioElem.current.addEventListener(
			'timeupdate',
			() => {
				const duration = (audioElem.current && audioElem.current.duration) || 0;
				setCurrentTime(audioElem.current.currentTime);
				setProgress((audioElem.current.currentTime / duration) * 100);
			},
			false
		);
	}, []);

	const togglePlay = () =>
		isPlaying ? audioElem.current.pause() : audioElem.current.play();

	return (
		<div className="message__audio">
			<audio ref={audioElem} src={audio} preload="auto" />
			<div
				className="message__audio-progress"
				style={{ width: `${progress}%`, height: '100%' }}></div>
			<div className="message__audio-info">
				<div className="message__audio-btn">
					<button onClick={togglePlay}>
						{isPlaying ? (
							<img src={pauseSvg} alt="Pause svg audio" />
						) : (
							<img src={playSvg} alt="Play svg audio" />
						)}
					</button>
				</div>
				<div className="message__audio-wave">
					<img src={waveSvg} alt="Wave svg" />
				</div>
				<span className="message__audio-duration">
					{converteCurrentTime(currentTime)}
				</span>
			</div>
		</div>
	);
};

const Message = (props) => {
	const {
		_id,
		user,
		text,
		createdAt,
		isMe,
		audio,
		readed,
		attachments,
		isTyping,
		onRemoveMessage,
	} = props;

	const [isVisiblePopover, setIsVisiblePopover] = useState(false);

	const handleVisibleChange = (visible) => {
		setIsVisiblePopover(visible);
	}

	return (
		<div
			className={classnames('message', {
				'message--isme': isMe,
				'message--is-typing': isTyping,
				'message--is-audio': audio,
				'message--image': attachments.length === 1,
			})}>
			<div className="message__content">
				<IconReaded isMe={isMe} isReaded={readed} />
				{isMe && <Popover
					content={<Button size='small' type="danger" onClick={onRemoveMessage(_id)}>Удалить</Button>}
					trigger="click"
					visible={isVisiblePopover}
					onVisibleChange={handleVisibleChange}>
					<div className="message__icon-actions">
						<Button type="link" shape="circle" icon="ellipsis" />
					</div>
				</Popover>}
				<div className="message__avatar">
					<Avatar user={user} />
				</div>
				<div className="message__info">
					{(audio || text || isTyping) && (
						<div className="message__bubble">
							{text && <p className="message__text">{text}</p>}
							{isTyping && (
								<div className="message__typing">
									<span />
									<span />
									<span />
								</div>
							)}
							{audio && <MessageAudio audio={audio} />}
						</div>
					)}
					<div className="message__attachments">
						{attachments.map(item => (
								<div key={uniqueId()} className="message__attachments-item">
									<img src={item.url} alt={item.filename} />
								</div>
							))}
					</div>
					<span className="message__date message__date__isme">
						<Time date={createdAt} />
					</span>
				</div>
			</div>
		</div>
	);
};

Message.propTypes = {
	avatar: PropTypes.string,
	text: PropTypes.string,
	user: PropTypes.object,
	date: PropTypes.string,
	attachments: PropTypes.array,
	isMe: PropTypes.bool,
	isReaded: PropTypes.bool,
	isTyping: PropTypes.bool,
	audio: PropTypes.string,
};

export default Message;
