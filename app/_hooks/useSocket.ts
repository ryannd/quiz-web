import { useState } from "react";
import { socket } from "../_util/socket";
import { Room } from "../_types/room.types";

export default function useSocket(): Room | undefined {
    const [room, setRoom] = useState<Room | undefined>()

    socket.off('room:update').once('room:update', (data: Room) => {
        setRoom(data)
    })

    return room;
}