import axios from "axios"
import React, { useState, useEffect } from "react"

const ForumSortSelect = ({setPostData, setSortMode}) => {

    const handleModeChange = async (sortMode) => {
        const newPostData = await axios.get(`/api/forum/posts/${sortMode}`)

        setPostData(newPostData.data)
        setSortMode(sortMode)
    }

    return (
        <>
            <div className="my-2">
                <label htmlFor="sort-by">Sort by:{' '}</label>
                <select className="bg-gray-300 rounded-md border-gray-600 border-2 hover:bg-gray-400" name="sort-by" id="sort-by" onChange={(e) => handleModeChange(e.target.value)}>
                    <option value="newest">newest</option>
                    <option value="oldest">oldest</option>
                    <option value="user">user</option>
                </select>
            </div>
        </>
    )
}

export default ForumSortSelect