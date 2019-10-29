import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Time, IconReaded } from 'components';
import './Message.scss';

const Message = ({ avatar, user, text, date, isMe, isReaded, attachments, isTyping }) => (
  <div className={classnames('message', {
    'message--isme': isMe,
    'message--is-typing': isTyping,
    'message--image': attachments && (attachments.length === 1),
  })}>
    <div className='message__content'>
      <IconReaded isMe={isMe} isReaded={isReaded} />
      <div className='message__avatar'>
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className='message__info'>
        {(text || isTyping) && 
          <div className='message__bubble'>
            {text && <p className='message__text'>{text}</p>}
            {isTyping && <div className='message__typing'>
              <span />
              <span />
              <span />
            </div>}
          </div>
        }
        <div className='message__attachments'>
          {attachments && attachments.map(item => (
            <div className='message__attachments-item'>
              <img src={item.url} alt={item.filename} />
            </div>
          ))}
        </div>
        {date && <span className='message__date message__date__isme'>
          <Time date={date} />
        </span>}
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
}

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  user: PropTypes.object,
  date: PropTypes.string,
  attachments: PropTypes.array,
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
  isTyping: PropTypes.bool,
};

export default Message;