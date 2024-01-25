import { io } from 'socket.io-client';

const URL = process.env.API_URL ?? "localhost:5000"

export const socket = io(URL, {
    autoConnect: false,
    path: '/socket'
});