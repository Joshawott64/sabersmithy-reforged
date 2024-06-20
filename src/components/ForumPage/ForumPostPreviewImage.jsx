import axios from "axios"
import React, { useState, useEffect } from "react"

const ForumPostPreviewImage = ({subjectSaber}) => {

    const [urls, setUrls] = useState({})

    useEffect(() => {
        axios.post('/api/gallery/urls', subjectSaber)
            .then((res) => {
                setUrls(res.data)
            })
    }, [])

    // console.log('subjectSaber:', subjectSaber)
    // console.log('urls:', urls)

    if (!subjectSaber.isDoubleBladed) {
        return (
            <>
            <div id="saber-preview">
                <ul id="saber-image">
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
                <ul id="saber-image">
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
                        <img src={urls.switch2} alt="Switch2" style={{transform: "rotate(180deg)"}} />
                    </li>
                    <li id="saber-list">
                        <img src={urls.guard2} alt="Guard2" style={{transform: "rotate(180deg)"}} />
                    </li>
                    <li id="saber-list">
                        <img src={urls.emitter2} alt="Emitter2" style={{transform: "rotate(180deg)"}} />
                    </li>
                </ul>
                <img src={urls.color} alt="Color" />
            </div>
            </>
        )
    }

}

export default ForumPostPreviewImage