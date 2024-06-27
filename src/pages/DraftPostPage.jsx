import React from "react"
import DraftPostTable from "../components/DraftPostPage/DraftPostTable.jsx"
import { useLocation } from "react-router-dom"

const DraftPostPage = () => {

    const { state } = useLocation()

    return (
        <div className="flex flex-col place-items-center my-2 gap-y-3">
            <h1 className="text-6xl text-green-500 font-bold">Draft Post</h1>
            <DraftPostTable state={state} />
        </div>
    )
}

export default DraftPostPage