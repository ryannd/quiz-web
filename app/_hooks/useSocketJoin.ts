import { useEffect } from "react"
import { socket } from "../_util/socket"

export default function useSocketJoin(roomCode: string, name: string) {
    useEffect(() => {
        socket.connect()
    }, [])

     useEffect(() => {
        socket.emit('socket:join', {roomId: roomCode, name })
    }, [roomCode, name])
}