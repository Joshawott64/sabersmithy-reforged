import React from "react"
import { useNavigate } from "react-router-dom"

const GalleryEditButton = ({saber, urls}) => {

    const navigate = useNavigate()

    if (saber.isDefault) {
        return (
            <>
                <button className="border-2 border-slate-400 rounded-sm bg-slate-200 w-1/3 text-slate-400 cursor-not-allowed" disabled>Edit</button>
            </>
        )
    } else {
        return (
            <>
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => {
                    navigate(`/edit/${saber.saberId}`, {state: {saber: saber, urls: urls}})
                }}>Edit</button>
            </>
        )
    }
}

export default GalleryEditButton