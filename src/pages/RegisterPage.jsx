import React, { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
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
        <div className="flex flex-col justify-center">
            <h2 className="mt-10 text-center text-2xl font-bold text-yellow-300">Create an account</h2>
            <form className="flex flex-col flex-wrap space-y-6 place-self-center bg-slate-300 border-4 border-slate-600 rounded-md w-1/6 h-full m-1 p-2" onSubmit={handleRegister}>
                <label className="block text-lg font-medium text-left" htmlFor="username">Username:</label>
                <input className="w-full rounded-md border-0 ring-1 ring-gray-600 ring-inset focus:ring-2" required value={username} type="text" placeholder="XxX__The$enate__XxX" onChange={(e) => setUsername(e.target.value)}/>
                <label className="block text-lg font-medium text-left" htmlFor="password">Password:</label>
                <input className="w-full rounded-md border-0 ring-1 ring-gray-600 ring-inset focus:ring-2" required value={password} type="password" placeholder="******" onChange={(e) => setPassword(e.target.value)}/>
                <label className="block text-lg font-medium text-left" htmlFor="confirmPassword">Confirm Password:</label>
                <input className="w-full rounded-md border-0 ring-1 ring-gray-600 ring-inset focus:ring-2" required value={confirmPassword} type="password" placeholder="******" onChange={(e) => setConfirmPassword(e.target.value)}/>
                {password === confirmPassword && <button className="w-full bg-green-400 hover:bg-green-300 hover:text-gray-600" type="submit">Register</button>}
            </form>
            {password !== confirmPassword && <p className="text-red-600">Password confirmation does not match</p>}
            <p className="text-slate-400">
                Already registered?{' '}
                <Link to="/login" className="text-green-600 hover:text-green-500">Log in here</Link>
            </p>
        </div>
        </>
    )
}

export default NewUserPage