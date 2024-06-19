import axios from "axios"
import React, { useState, useEffect } from "react"
import ForumSortSelect from "./ForumSortSelect.jsx"
import ForumFilters from "./ForumFilters.jsx"

const ForumSideBar = ({setPostData, setSortMode, setColorFilter, setBladeStyleFilter, setSoundfontFilter, setBladeNumberFilter}) => {

    const handleModeChange = async (sortMode) => {
        const newPostData = await axios.get(`/api/forum/posts/${sortMode}`)

        console.log('newPostData.data:', newPostData.data)

        setPostData(newPostData.data)
        setSortMode(sortMode)
    }

    return (
        <>
            <p>Filters and such</p>
            <ForumSortSelect setPostData={setPostData} setSortMode={setSortMode} />
            <ForumFilters setColorFilter={setColorFilter} setBladeStyleFilter={setBladeStyleFilter} setSoundfontFilter={setSoundfontFilter} setBladeNumberFilter={setBladeNumberFilter} />
        </>
    )
}

export default ForumSideBar