import React from 'react';
import { Message } from 'components';
import './Home.scss';

const Home = () => (
  <section className='home'>
    <Message
      avatar='https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1'
      text='Hi, bro! How are you?'
      date='Sat Oct 26 2019 11:03:01' />
  </section>
);

export default Home;