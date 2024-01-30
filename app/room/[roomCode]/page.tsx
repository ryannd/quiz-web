'use client'
import useSocketJoin from "../../_hooks/useSocketJoin";
import useSocket from "../../_hooks/useSocket";

export default function Room({ params }: { params: { roomCode: string }}) {
    const name = "test";
    const room = useSocket()

    useSocketJoin(params.roomCode, name)

    return <>
        <h1>{room?.hostId}</h1>
    </>
}