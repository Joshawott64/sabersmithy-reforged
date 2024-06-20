import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const SaberSelectOptions = ({saber, saberId, minigameName}) => {

    const navigate = useNavigate()

    const [urls, setUrls] = useState({})
    const [isSelected, setIsSelected] = useState(false)

    // adjust minigameName for navigate template string
    minigameName = minigameName.toLowerCase().replaceAll(' ', '')

    useEffect(() => {
        axios.post('/api/gallery/urls', saber)
            .then((res) => {
                setUrls(res.data)
            })
    }, [])

    const handleSaberSelect = () => {
        if (isSelected) {
            setIsSelected(false)
        } else {
            setIsSelected(true)
        }
    }

    return (
        <>
            <button id="saber-select" onClick={handleSaberSelect}>
                <label htmlFor="saber-select">{saber.name}</label>
                {!saber.isDoubleBladed && <ul id="saber-image">
                    <li>
                        <img src={urls.emitter} alt="Emitter" />
                    </li>
                    <li>
                        <img src={urls.guard} alt="Guard" />
                    </li>
                    <li>
                        <img src={urls.switch} alt="Switch"/>
                    </li>
                    <li>
                        <img src={urls.pommel} alt="Pommel" />
                    </li>
                </ul>}
                {saber.isDoubleBladed && <ul id="saber-image">
                    <li>
                        <img src={urls.emitter} alt="Emitter" />
                    </li>
                    <li>
                        <img src={urls.guard} alt="Guard" />
                    </li>
                    <li>
                        <img src={urls.switch} alt="Switch"/>
                    </li>
                    <li>
                        <img src={urls.switch2} alt="Switch2" style={{transform: "rotate(180deg)"}} />
                    </li>
                    <li>
                        <img src={urls.guard2} alt="Guard2" style={{transform: "rotate(180deg)"}} />
                    </li>
                    <li>
                        <img src={urls.emitter2} alt="Emitter2" style={{transform: "rotate(180deg)"}} />
                    </li>
                </ul>}
                <img src={urls.color} alt="Color" htmlFor="saber-select" />
            </button>
            {isSelected && <button onClick={() => navigate(`/${minigameName}`, {state: {saber: saber, urls: urls}})}>Select</button>}
            {isSelected && <button onClick={handleSaberSelect}>Cancel</button>}
        </>
    )
}

export default SaberSelectOptions