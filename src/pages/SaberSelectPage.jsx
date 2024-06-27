import { useLocation } from "react-router-dom"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import SaberSelectOptions from "../components/SaberSelectPage/SaberSelectOptions.jsx"

const initialSaberData = await axios.get('/api/gallery/default-sabers')
console.log('initialSaberData.data:', initialSaberData.data)

function SaberSelectPage() {

    const [saberData, setSaberData] = useState(initialSaberData.data)

    const userId = useSelector((state) => state.userId)

    const { state } = useLocation()
    const minigameName = state.name

    useEffect(() => {
        if (userId) {
            axios.get(`/api/gallery/${userId}`)
                .then((res) => {
                    setSaberData(res.data)
                })
        }
    }, [])

    const sabers = saberData.map((el) => <SaberSelectOptions 
        saber={el}
        saberId={el.saberId}
        key={el.saberId}
        minigameName={minigameName}
    />)

    return (
        <>
            <div className="flex flex-col  place-items-center my-2 gap-y-3">
                <h1>Select your saber for {minigameName}:</h1>
                <div className="grid grid-cols-4 gap-3">
                    { sabers } 
                </div>
            </div>
        </>
    )
}

export default SaberSelectPage