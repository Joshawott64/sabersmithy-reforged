import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
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
        <div className="flex flex-col justify-center">
            <h2 className="mt-10 text-center text-2xl font-bold">Log in to your account</h2>
            <form className="flex flex-col flex-wrap space-y-6 place-self-center border-4 w-1/6 h-full m-1 p-1" onSubmit={handleLogin}>
                <label className="block text-lg font-medium text-left" htmlFor="username">Username:</label>
                <input value={username} type="text" placeholder="XxX__The$enate__XxX" onChange={(e) => setUsername(e.target.value)}/>
                <label className="block text-lg font-medium text-left" htmlFor="password">Password:</label>
                <input value={password} type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}/>
                <button className="w-full bg-green-400 hover:bg-green-300 hover:text-gray-600" type="submit">Log In</button>
            </form>
        </div>
            <p
            >New to Sabersmithy?
            <Link to="/register">Register here</Link>
            </p>
        </>
    )
}

export default LoginPage