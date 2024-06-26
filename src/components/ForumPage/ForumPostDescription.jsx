import axios from "axios"
import React, { useState, useEffect } from "react"

const ForumPostDescription = ({post, isEditing, setPostBody}) => {

    const [username, setUsername] = useState('')

    const postDate = post.createdAt.replace(/^(\d{4})(-)(\d{2})(-)(\d{2}).+/g, '$3/$5/$1')
    const editedDate = post.updatedAt.replace(/^(\d{4})(-)(\d{2})(-)(\d{2}).+/g, '$3/$5/$1')

    useEffect(() => {
        axios.get(`/api/username/${post.userId}`)
            .then((res) => {
                setUsername(res.data.username)
            })
    })

    return (
        <>
            <div className="flex flex-col" id="post-description">
                <h2>{username}</h2>
                {!isEditing && <p>{post.body}</p>}
                {isEditing && <textarea name="description" id="description" rows="4" cols="50" defaultValue={post.body} onChange={(e) => setPostBody(e.target.value)}></textarea>}
                <div className="">
                    <p>Posted on: {postDate}</p>
                    {post.createdAt !== post.updatedAt && <p>Edited on: {editedDate}</p>}
                </div>
            </div>
        </>
    )
}

export default ForumPostDescription