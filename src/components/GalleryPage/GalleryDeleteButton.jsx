import React from "react"

const GalleryDeleteButton = ({saber}) => {
    if (saber.isDefault) {
        return (
            <>
                <button disabled>Delete</button>
            </>
        )
    } else {
        return (
            <>
                <button>Delete</button>
            </>
        )
    }
}

export default GalleryDeleteButton