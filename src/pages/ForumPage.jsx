import axios from "axios"
import React, { useState, useEffect } from "react"
import ForumPost from "../components/ForumPage/ForumPost.jsx"
import ForumSideBar from "../components/ForumPage/ForumSideBar.jsx"

function ForumPage() {

    const [postData, setPostData] = useState([])

    useEffect(() => {
        axios.get('/api/forum/posts')
            .then((res) => {
                setPostData(res.data)
            })
    }, [])

    const posts = postData.map((el) => <ForumPost 
        post={el}
        key={el.postId}
        setPostData={setPostData}
    />)

    return (
        <>
            <h1>Forum Page</h1>
            { posts }
            <ForumSideBar />
        </>
    )
}

export default ForumPage