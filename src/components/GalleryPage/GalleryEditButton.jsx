import React from "react"

const GalleryEditButton = ({saber}) => {
    if (saber.isDefault) {
        return (
            <>
                <button disabled>Edit</button>
            </>
        )
    } else {
        return (
            <>
                <button>Edit</button>
            </>
        )
    }
}

export default GalleryEditButton