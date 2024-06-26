import React from "react"
import { useNavigate } from "react-router-dom"

const GalleryPostButton = ({saber}) => {

    const navigate = useNavigate()

    if (saber.isDefault) {
        return (
            <button className="border-2 border-slate-400 rounded-sm bg-slate-200 w-1/3 text-slate-400 cursor-not-allowed" disabled>Post</button>
        )
    } else {
        return (
            <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => navigate(`/post/${saber.saberId}`, {state: {saber: saber}})}>Post</button>
        )
    }
}

export default GalleryPostButton