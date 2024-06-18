import axios from "axios"
import React, { useState, useEffect } from "react"

const DraftPostPreviewImage = ({saber}) => {

    const [urls, setUrls] = useState({})

    useEffect(() => {
        axios.post('/api/gallery/urls', saber)
            .then((res) => {
                setUrls(res.data)
            })
    }, [])

    if (!saber.isDoubleBladed) {
        return (
            <>
            <div id="saber-preview">
                <ul>
                    <li>
                        <img src={urls.emitter} alt="Emitter" />
                    </li>
                    <li>
                        <img src={urls.guard} alt="Guard" />
                    </li>
                    <li>
                        <img src={urls.switch} alt="switch" />
                    </li>
                    <li>
                        <img src={urls.pommel} alt="Pommel" />
                    </li>
                </ul>
                <img src={urls.color} alt="Color" />
            </div>
            </>
        )
    } else {
        return (
            <>
            <div id="saber-preview">
                <ul>
                    <li id="saber-list">
                        <img src={urls.emitter} alt="Emitter" />
                    </li>
                    <li id="saber-list">
                        <img src={urls.guard} alt="Guard" />
                    </li>
                    <li id="saber-list">
                        <img src={urls.switch} alt="Switch" />
                    </li>
                    <li id="saber-list">
                        <img src={urls.switch2} alt="Switch2" />
                    </li>
                    <li id="saber-list">
                        <img src={urls.guard2} alt="Guard2" />
                    </li>
                    <li id="saber-list">
                        <img src={urls.emitter2} alt="Emitter2" />
                    </li>
                </ul>
                <img src={urls.color} alt="Color" />
            </div>
            </>
        )
    }
}

export default DraftPostPreviewImage