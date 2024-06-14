import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"

function LoginPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const userId = useSelector((state) => state.userId)
  
    const dispatch = useDispatch()

    const handleLogin = async (e) => {
        // e.preventDefault()
        console.log(`Hello there, ${username}`)

        const bodyObj = {
            username: username,
            password: password
        }

        const res = await axios.post('/api/login', bodyObj)

        if (res.data.userId) {
            dispatch({
                type: "USER_AUTH",
                payload: res.data.userId
            })

            setUsername('')
            setPassword('')
        }
    }

    return (
        <>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username:</label>
                <input value={username} type="text" placeholder="XxX__The$enate__XxX" onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input value={password} type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}/>
                <button type="submit">Log In</button>
            </form>
            <button onClick={() => navigate('/register')}>New to Sabersmithy? Register here.</button>
        </>
    )
}

export default LoginPage