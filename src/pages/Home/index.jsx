import React from 'react';
import { Message } from 'components';
import './Home.scss';

const Home = () => (
  <section className='home'>
    <Message
      avatar='https://sun1-20.userapi.com/c824502/v824502841/15c2cd/-CaadExwWME.jpg?ava=1'
      text='Hi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are youHi, bro! How are you?'
      date='Sat Oct 24 2019 11:03:01'
      isMe={false}
      attachments={[
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=1&nature,water,california,girl',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=2&nature,water,california,girl',
        },
        {
          filename: 'image.jpg',
          url: 'https://source.unsplash.com/100x100/?random=3&nature,water,california,girl',
        },
      ]}
    />
    <Message
      avatar='https://sun1-27.userapi.com/c851328/v851328881/1521fb/G6lEbbO8h-8.jpg?ava=1'
      text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia, ipsam. Mollitia totam alias dolorem quisquam eligendi quod quia omnis asperiores vel sequi voluptatem, cumque, esse quaerat ratione. Numquam, maiores accusamus deserunt obcaecati corporis earum. Mollitia cumque nostrum laboriosam dolores voluptatum atque consectetur nisi omnis doloremque sapiente adipisci optio hic obcaecati eos dolorem blanditiis quisquam ipsa et quaerat unde, aperiam dicta eligendi velit! Necessitatibus quam cupiditate ratione delectus pariatur iure facere suscipit rerum possimus eveniet alias dolore quidem nihil optio eos praesentium, est dolorem soluta quos rem, consectetur earum excepturi molestiae! Distinctio sunt ex quis ea deleniti error saepe accusantium eius?'
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

  </section>
);

export default Home;