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
            <div id="post-description">
                <h2>{username}</h2>
                <textarea name="description" id="description" rows="4" cols="50" defaultValue={description} onChange={(e) => setDescription(e.target.value)}></textarea>
            </div>
        </>
    )
}

export default DraftPostInput