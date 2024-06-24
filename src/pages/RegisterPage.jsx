import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"

function NewUserPage() {

    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const userId = useSelector((state) => state.userId)
  
    const dispatch = useDispatch()

    const handleRegister = async (e) => {
        // e.preventDefault()
        console.log(`${username} has been registered`)
        // check if forms are not empty (or that username, password, and confirmPassword aren't empty strings)
        // if forms are filled out check if username is available (not being used already)
        // if username is available, make sure the password and confirm password match
        // if password and confirmPassword match, create new user in database and navigate to login page
        if (password === confirmPassword) {
            const bodyObj = {
                username: username,
                password: password
            }

            const res = await axios.post('/api/register', bodyObj)

            if (res.data.success) {
                dispatch({
                    type: "USER_AUTH",
                    payload: res.data.userId
                })
                setUsername('')
                setPassword('')
                setConfirmPassword('')
            }
        }
    }

    return (
        <>
            <form onSubmit={handleRegister}>
                <label htmlFor="username">Username:</label>
                <input required value={username} type="text" placeholder="XxX__The$enate__XxX" onChange={(e) => setUsername(e.target.value)}/>
                <label htmlFor="password">Password:</label>
                <input required value={password} type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input required value={confirmPassword} type="password" placeholder="******" onChange={(e) => setConfirmPassword(e.target.value)}/>
                {password === confirmPassword && <button type="submit">Register</button>}
            </form>
            {password !== confirmPassword && <p>Password confirmation does not match</p>}
            <button onClick={() => navigate('/login')}>Already registered? Log in here.</button>
        </>
    )
}

export default NewUserPage