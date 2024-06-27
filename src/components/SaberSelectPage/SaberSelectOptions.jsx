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
        <div className="flex flex-col justify-between border-4 border-black rounded-lg bg-neutral-300">
            <div className="flex-col h-full cursor-pointer" onClick={handleSaberSelect}>
                <div className="flex flex-row justify-between">
                    <div className="self-start">
                    {!saber.isDoubleBladed && <div id="saber-preview">
                            <ul id="saber-image">
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
                            </ul>
                        </div>}
                        {saber.isDoubleBladed && <div id="saber-preview">
                            <ul id="saber-image">
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
                            </ul>
                        </div>}
                    </div>
                    <div className="self-start">
                        <img src={urls.color} alt="Color" htmlFor="saber-select" />
                    </div>
                </div>
            </div>
            <div className="flex-row space-x-2">
                <p className="w-full">{saber.name}</p>
                {isSelected && <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => navigate(`/${minigameName}`, {state: {saber: saber, urls: urls}})}>Select</button>}
                {isSelected && <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={handleSaberSelect}>Cancel</button>}
            </div>
        </div>
    )
}

export default SaberSelectOptions