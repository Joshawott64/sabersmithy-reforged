import React from "react"
import axios from "axios"
// import fineAddition from "../src/assets/audio/fine_addition.mp3"

const GalleryDeleteButton = ({saber, setSaberData}) => {
    const deleteSaber = async () => {
        console.log(`Id: ${saber.saberId} will make a fine addition to my collection, hahahahahaaaa.`)

        const newSaberData = await axios.delete(`/api/delete/${saber.saberId}`)

        // new Audio(fineAddition).play()

        console.log('newSaberData:', newSaberData)

        setSaberData(newSaberData.data)
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