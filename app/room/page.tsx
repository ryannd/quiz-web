import generateRoomCode from "../_util/generateRoomCode"
import Link from 'next/link'

export default function JoinRoom() {
    return <>
        <Link href={`/room/${generateRoomCode()}`}><button className="btn">Create Room</button></Link>
    </>
}