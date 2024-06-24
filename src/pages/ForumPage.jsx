import axios from "axios"
import React, { useState, useEffect } from "react"
import forum from "../assets/GUIComponents/Forum.png"
import ForumPost from "../components/ForumPage/ForumPost.jsx"
import ForumSideBar from "../components/ForumPage/ForumSideBar.jsx"

function ForumPage() {

    const [postData, setPostData] = useState([])
    const [sortMode, setSortMode] = useState('newest')
    const [colorFilter, setColorFilter] = useState()
    const [bladeStyleFilter, setBladeStyleFilter] = useState()
    const [soundfontFilter, setSoundfontFilter] = useState()
    const [bladeNumberFilter, setBladeNumberFilter] = useState()

    useEffect(() => {
        axios.get(`/api/forum/posts/${sortMode}`)
            .then((res) => {
                setPostData(res.data)
            })
    }, [])

    const posts = postData.map((el) => <ForumPost 
        post={el}
        key={el.postId}
        setPostData={setPostData}
        colorFilter={colorFilter}
        bladeStyleFilter={bladeStyleFilter}
        soundfontFilter={soundfontFilter}
        bladeNumberFilter={bladeNumberFilter}
    />)

    return (
        <>
            <img src={forum} alt="Forum" />
            { posts }
            <ForumSideBar 
                setPostData={setPostData} 
                setSortMode={setSortMode} 
                setColorFilter={setColorFilter} 
                setBladeStyleFilter={setBladeStyleFilter} 
                setSoundfontFilter={setSoundfontFilter} 
                setBladeNumberFilter={setBladeNumberFilter}
            />
        </>
    )
}

export default ForumPage