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
            <h2>{greetings[greetingId]}</h2>
            <br />
            <button onClick={() => navigate('/forge')}>Forge</button>
            <br />
            <button onClick={() => navigate('/gallery')}>Gallery</button>
            <br />
            <button onClick={() => navigate('/minigames')}>Minigames</button>
            <br />
            <button onClick={() => navigate('/forum')}>Forum</button>  
        </>
    )
}

export default HomePage