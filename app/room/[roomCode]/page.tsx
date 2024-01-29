'use client'
import useSocketJoin from "../../_hooks/useSocketJoin";
import useSocketRoom from "../../_hooks/useSocketRoom";

export default function Room({ params }: { params: { roomCode: string }}) {
    const name = "test";
    const room = useSocketRoom()

    useSocketJoin(params.roomCode, name)

    return <>
        <h1>{room?.hostId}</h1>
    </>
}