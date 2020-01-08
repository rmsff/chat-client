import React from 'react';
import { Messages, ChatInput, DialogHeader, Sidebar } from 'containers';

import './Home.scss';

const Home = () => (
	<section className="home">
		<div className="chat">
      <Sidebar />
			<div className="chat__dialog">
        <DialogHeader />
        <div className='chat__dialog-messages' >
          <Messages />
        </div>
        <div className='chat__dialog-input'>
          <ChatInput />
        </div>
			</div>
		</div>
	</section>
);

export default Home;
