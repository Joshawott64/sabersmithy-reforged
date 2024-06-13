import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function NewUserPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`Hello there, ${username}`)
        // check if forms are not empty (or that username, password, and confirmPassword aren't empty strings)
        // if forms are filled out check if username is available (not being used already)
        // if username is available, make sure the password and confirm password match
        // if password and confirmPassword match, create new user in database and navigate to login page
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input value={username} type="text" placeholder="XxX__The$enate__XxX" onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input value={password} type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input value={confirmPassword} type="password" placeholder="******" onChange={(e) => setConfirmPassword(e.target.value)}/>
                <button type="submit">Register</button>
            </form>
            <button onClick={() => navigate('/login')}>Already registered? Log in here.</button>
        </>
    )
}

export default NewUserPage