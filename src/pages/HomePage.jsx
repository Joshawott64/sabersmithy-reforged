import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import React, { useState, useEffect } from "react"
import axios from "axios"

function HomePage() {

    const navigate = useNavigate()

    const userId = useSelector((state) => state.userId)

    const [username, setUsername] = useState('')

    useEffect(() => {
        if (userId) {
            axios.get(`/api/username/${userId}`)
                .then((res) => {
                    setUsername(res.data.username)
                })
        }
        })
        
    const greetings = [
        `Hello there, ${username}.`,
        `We've been expecting you, ${username}.`,
        `It's over, ${username}. I have the high ground!`,
        `Somehow, ${username} returned.`,
        `Be careful not to choke on your aspiriations, ${username}.`,
        `Welcome back, ${username}.`

    ]
    const greetingId = Math.floor(Math.random() * greetings.length)
    console.log('greetingId:', greetingId)


    return (
        <>
            <h2 className="my-5 text-2xl">{greetings[greetingId]}</h2>
            <div className="flex flex-col justify-evenly items-center h-screen">
                <button className="h-1/6 w-1/4 justify-self-center bg-zinc-950 border-8 border-orange-400 rounded-md text-5xl text-orange-400 font-bold truncate" onClick={() => navigate('/forge')}>Forge</button>
                <button className="h-1/6 w-1/4 justify-self-center bg-zinc-950 border-8 border-blue-400 rounded-md text-5xl text-blue-400 font-bold truncate" onClick={() => navigate('/gallery')}>Gallery</button>
                <button className="h-1/6 w-1/4 justify-self-center bg-zinc-950 border-8 border-yellow-400 rounded-md text-5xl text-yellow-400 font-bold truncate" onClick={() => navigate('/minigames')}>Minigames</button>
                <button className="h-1/6 w-1/4 justify-self-center bg-zinc-950 border-8 border-green-500 rounded-md text-5xl text-green-500 font-bold truncate" onClick={() => navigate('/forum')}>Forum</button>  
            </div>
        </>
    )
}

export default HomePage