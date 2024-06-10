import React from 'react'
import axios from 'axios'

const GalleryImageList = ({saber, urls}) => {

    console.log('urls:', urls)

    if (!saber.isDoubleBladed) {
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
                            <img src={urls.pommel} alt="Pommel" />
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
                </div>
            </>
        )
    }
}

export default GalleryImageList