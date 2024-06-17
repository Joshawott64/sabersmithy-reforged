import React from "react"
import axios from "axios"
import ForumPost from "../components/ForumPage/ForumPost.jsx"
import ForumSideBar from "../components/ForumPage/ForumSideBar.jsx"

function ForumPage() {
    return (
        <>
            <h1>Forum Page</h1>
            <ForumPost />
            <ForumSideBar />
        </>
    )
}

export default ForumPage