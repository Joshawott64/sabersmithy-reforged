import React from "react"
import { useNavigate } from "react-router-dom"

const GalleryEditButton = ({saber, urls}) => {

    const navigate = useNavigate()

    if (saber.isDefault) {
        return (
            <>
                <button disabled>Edit</button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => {
                    navigate(`/edit/${saber.saberId}`, {state: {saber: saber, urls: urls}})
                }}>Edit</button>
            </>
        )
    }
}

export default GalleryEditButton