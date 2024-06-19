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
            <label htmlFor="sort-by">Sort by:</label>
            <select name="sort-by" id="sort-by" onChange={(e) => handleModeChange(e.target.value)}>
                <option value="newest">newest</option>
                <option value="oldest">oldest</option>
                <option value="user">user</option>
            </select>
        </>
    )
}

export default ForumSortSelect