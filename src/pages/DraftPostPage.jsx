import React from "react"
import DraftPostTable from "../components/DraftPostPage/DraftPostTable.jsx"
import { useLocation } from "react-router-dom"

const DraftPostPage = () => {

    const { state } = useLocation()

    return (
        <>
            <h1>Draft Post</h1>
            <DraftPostTable state={state} />
        </>
    )
}

export default DraftPostPage