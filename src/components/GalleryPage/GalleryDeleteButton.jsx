import React from "react"
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import fineAddition from "../../../src/assets/audio/fine_addition.mp3"

const GalleryDeleteButton = ({saber, setSaberData}) => {

    const userId = useSelector((state) => state.userId)
  
    const dispatch = useDispatch()

    const deleteSaber = async () => {
        console.log(`Id: ${saber.saberId} will make a fine addition to my collection, hahahahahaaaa.`)

        await axios.delete(`/api/delete/${saber.saberId}`)

        const newSaberData = await axios.get(`/api/gallery/${userId}`)

        new Audio(fineAddition).play()

        console.log('newSaberData:', newSaberData)

        setSaberData(newSaberData.data)
    }

    if (saber.isDefault) {
        return (
            <>
                <button className="border-2 border-slate-400 rounded-sm bg-slate-200 w-1/3 text-slate-400 cursor-not-allowed" disabled>Delete</button>
            </>
        )
    } else {
        return (
            <>
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => deleteSaber()}>Delete</button>
            </>
        )
    }
}

export default GalleryDeleteButton