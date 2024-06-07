import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const GalleryImageList = ({saber}) => {

    const [urls, setUrls] = useState({})

    useEffect(() => {
        axios.post('/api/gallery/urls', saber)
            .then((res) => {
                setUrls(res.data)
            })
    }, [])

    console.log('urls:', urls)

    if (saber.isDoubleBladed !== true) {
        return (
            <>
                <div id="saber-preview">
                    <ul>
                        <li id="saber-list">
                            <img src={saber.emitterId} alt="Emitter" />
                        </li>
                        <li id="saber-list">
                            <img src={saber.guardId} alt="Guard" />
                        </li>
                        <li id="saber-list">
                            <img src={saber.switchId} alt="Switch" />
                        </li>
                        <li id="saber-list">
                            <img src={saber.pommelId} alt="Pommel" />
                        </li>
                    </ul>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div id="saber-preview">
                    <ul>
                        <li id="saber-list">
                            <img src={saber.emitterId} alt="Emitter" />
                        </li>
                        <li id="saber-list">
                            <img src={saber.guardId} alt="Guard" />
                        </li>
                        <li id="saber-list">
                            <img src={saber.switchId} alt="Switch" />
                        </li>
                        <li id="saber-list">
                            <img src={saber.switch2Id} alt="Switch2" />
                        </li>
                        <li id="saber-list">
                            <img src={saber.guard2Id} alt="Guard2" />
                        </li>
                        <li id="saber-list">
                            <img src={saber.emitter2Id} alt="Emitter2" />
                        </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default GalleryImageList