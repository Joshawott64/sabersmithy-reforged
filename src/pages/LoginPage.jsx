import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function LoginPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Hello there, ${username}`)
        // check if username and password are in the database
        // if so, navigate them to home page
        // otherwise keep them here
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
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