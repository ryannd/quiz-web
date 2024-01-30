'use client'
import { useState } from "react"
import generateRoomCode from "../_util/generateRoomCode"
import { useRouter } from "next/navigation"

export default function JoinRoom() {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)
    const router = useRouter()

    const navigateToRoom = (create = false) => {
        if(create) {
            router.push(`/room/${generateRoomCode()}`)
        } else if(input === '') {
            setError(true)
        } else {
            setError(false)
            router.push(`/room/${input}`)
        }
    }

    return <div className="hero h-full p-4 md:p-8">
        <div className="hero-content">
            <div className="max-w-sm">
                <input type="text" placeholder="Room code" className={`input input-bordered w-full ${error ? 'input-error' : ''}`} onChange={(e) => setInput(e.target.value)}/>
                <button className="btn w-full mt-3" onClick={() => navigateToRoom()}>Join Room</button>
                <div className="flex items-center my-4"> 
                    <hr className="flex-grow border-t border-gray-300"/> 
                    <span className="px-3 text-gray-500"> 
                        or
                    </span> 
                    <hr className="flex-grow border-t border-gray-300"/> 
                </div> 
                <button className="btn w-full" onClick={() => navigateToRoom(true)}>Create Room</button>
            </div>

        </div>
    </div>
}