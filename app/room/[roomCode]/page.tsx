'use client'
import { useEffect } from "react"
import { socket } from "../../../util/socket"

export default function Room({ params }: { params: { roomCode: string }}) {
    
    useEffect(() => {
        socket.connect()
    }, [])

    return <>
        <h1>{params.roomCode}</h1>
    </>
}