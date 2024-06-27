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
            <div className="flex flex-col w-full items-center my-2">
                <img className="w-1/2" src={forum} alt="Forum" />
                <div className="flex flex-row space-x-24 my-2">
                    <div className="flex flex-col items-center space-y-6 ">
                        { posts }
                    </div>
                    <div className="flex flex-col h-full max-w-1/3 bg-zinc-100 border-4 border-slate-600 rounded-md space-y-4 p-2">
                        <ForumSideBar 
                            setPostData={setPostData} 
                            setSortMode={setSortMode} 
                            setColorFilter={setColorFilter} 
                            setBladeStyleFilter={setBladeStyleFilter} 
                            setSoundfontFilter={setSoundfontFilter} 
                            setBladeNumberFilter={setBladeNumberFilter}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForumPage