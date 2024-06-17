import axios from "axios"
import React, { useState, useEffect } from "react"

const ForumPostDescription = ({post}) => {

    const [username, setUsername] = useState('')

    useEffect(() => {
        axios.get(`/api/username/${post.userId}`)
            .then((res) => {
                setUsername(res.data.username)
            })
    })

    return (
        <>
            <div id="post-description">
                <h2>{username}</h2>
                <p>{post.body}</p>
            </div>
        </>
    )
}

export default ForumPostDescription