import React from "react"
import { useNavigate } from "react-router-dom"

const GalleryPostButton = ({saber}) => {

    const navigate = useNavigate()

    if (saber.isDefault) {
        return (
            <button disabled>Post</button>
        )
    } else {
        return (
            <button onClick={() => navigate(`/post/${saber.saberId}`, {state: {saber: saber}})}>Post</button>
        )
    }
}

export default GalleryPostButton