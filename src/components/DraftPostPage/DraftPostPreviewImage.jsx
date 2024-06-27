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

    return (
        <div className="flex py-2 justify-center w-full border-2 border-x-0 border-slate-600 bg-zinc-100">
            <div className="" id="saber-preview">
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
                        {!saber.isDoubleBladed && <img src={urls.pommel} alt="Pommel" />}
                    </li>
                    <li>
                        {saber.isDoubleBladed && <img className="rotate-180" src={urls.switch2} alt="Switch2" />}
                    </li>
                    <li>
                        {saber.isDoubleBladed && <img className="rotate-180" src={urls.guard2} alt="Guard2" />}
                    </li>
                    <li>
                        {saber.isDoubleBladed && <img className="rotate-180" src={urls.emitter2} alt="Emitter2" />}
                    </li>
                </ul>
            </div>
            <div className="">
                <img src={urls.color} alt="Color"/>
            </div>
        </div>
    )
}

export default DraftPostPreviewImage