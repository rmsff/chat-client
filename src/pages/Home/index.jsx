import React from 'react';
import { Message } from 'components';
import { DialogItem } from 'components';
import './Home.scss';

const user = {
  fullname: 'Федор Достоевский',
  isOnline: true,

}

const Home = () => (
  <section className='home'>
    <div className='dialogs'>
    <DialogItem
        user={user}
        unreaded={9}
      />
      <DialogItem
        user={user}
        unreaded={false}
      />
      <DialogItem
        user={user}
        unreaded={false}
      />
    </div>














    {/* <Dialogs
      items={[
        {
          user: {
            fillname: 'Fedor Dostoevsky',
            avatar: null,
          },
          message: {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit sunt, ullam facere iste aut praesentium eligendi, aliquid, ab distinctio eius dolorem corporis dolorum est recusandae autem sequi delectus explicabo consectetur?',
            isReaded: false,
            created_at: new Date(),
          },
        },
      ]}
    /> */}


    {/* <Message
      avatar='https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1'
      text='Hi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are you?'
      date='Sat Oct 24 2019 11:03:01'
      isMe={false}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {
          filename: 'image.jpg',
          url: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=5&water,california,auto',
        },
      ]}
    />
    <Message
      avatar='https://sun1-27.userapi.com/c851328/v851328881/1521fb/G6lEbbO8h-8.jpg?ava=1'
      text='Lorem ipsum dolor sit amet consectetur, adipisicing elit.s?'
      date='Sat Oct 25 2019 09:03:01'
      isMe={true}
      isReaded={true}
    />
    <Message
      avatar='https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1'
      text='Hi,'
      date='Sat Oct 26 2019 11:03:01'
      isMe={false}
    />
    <Message
      avatar='https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1'
      date='Sat Oct 24 2019 11:03:01'
      isMe={false}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1&nature,water,california,girl',
        }
      ]}
    />
    <Message
      avatar='https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1'
      isTyping
    /> */}
  </section>
);

export default Home;