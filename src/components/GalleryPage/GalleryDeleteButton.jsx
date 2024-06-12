import React from "react"
import axios from "axios"

const GalleryDeleteButton = ({saber}) => {
    const deleteSaber = async () => {
        console.log(`Id: ${saber.saberId} will make a fine addition to my collection, hahahahahaaaa.`)

        await axios.delete(`/api/delete/${saber.saberId}`)
    }

    if (saber.isDefault) {
        return (
            <>
                <button disabled>Delete</button>
            </>
        )
    } else {
        return (
            <>
                <button onClick={() => deleteSaber()}>Delete</button>
            </>
        )
    }
}

export default GalleryDeleteButton