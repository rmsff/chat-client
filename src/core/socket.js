import io from 'socket.io-client';

const serverPort = '3003';
const socket = io(`${window.location.origin}:${serverPort}`);

export default socket;
