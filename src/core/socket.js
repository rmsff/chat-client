import io from 'socket.io-client';

const socket = io(window.location.origin.replace('80', '3003'));

export default socket;
