import React from 'react';
import classnames from 'classnames';
import { Time, IconReaded } from 'components';
import './DialogItem.scss';

const getAvatar = avatar => {
  if (avatar) {
    return (
      <img
        src='https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1'
        alt=''
      />
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, date, isMe, isReaded, unreaded }) => (
  <div className={classnames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
    <div className='dialogs__item-avatar'>
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
      {getAvatar('https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1')}
    </div>
    <div className='dialogs__item-info'>
      <div className='dialogs__item-info-top'>
        <b>Fedor Iva Dostoevsky</b>
        <span>
          { '' }
          <Time date={new Date()} />
          {/* 13:03 */}
        </span>
      </div>
      <div className='dialogs__item-info-bottom'>
        <p>Lorem ipsum dolor setum lorem 3ipsum dolor setum lorem ipsum dolor setum lorem Lorem ipsum dolor setum lorem ipsum dolor setum lorem ipsum </p>
        {<IconReaded isMe={false} isReaded={true} />}
        {unreaded && <div className='dialogs__item-info-bottom-count'>
          {unreaded > 9 ? '+9' : unreaded}
        </div>}
      </div>
    </div>
  </div>
);

export default DialogItem;