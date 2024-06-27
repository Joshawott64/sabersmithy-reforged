import axios from "axios"
import React, { useState, useEffect } from "react"

const DraftPostInput = ({saber, description, setDescription}) => {

    const [username, setUsername] = useState('')

    useEffect(() => {
        axios.get(`/api/username/${saber.userId}`)
            .then((res) => {
                setUsername(res.data.username)
            })
    })

    return (
        <>
            <div className="flex flex-col p-2 justify-between items-center w-full border-2 border-r-0 border-slate-600" id="post-description">
                <h2 className="font-bold">{username}</h2>
                <textarea className="w-full h-full rounded-md border-2 border-zinc-400" name="description" id="description" rows="4" cols="50" defaultValue={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
        </>
    )
}

export default DraftPostInput