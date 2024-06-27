import React, { useState, useEffect, isBladeOn } from "react"

const SandboxSaberImage = ({saber, urls, isBladeOn}) => {

    return (
        <>
            <ul id="saber-image">
                {!isBladeOn && <li>
                    <img src={urls.emitter} alt="Emitter"  />
                </li>}
                {isBladeOn && <audio loop autoPlay hidden>
                    <source src={urls.sounds.hum} />
                </audio>}
                {isBladeOn && <li>
                    <img src={urls.coloredEmitter} alt="ColoredEmitter" />
                </li>}
                <li>
                    <img src={urls.guard} alt="Guard"  />
                </li>
                <li>
                    <img src={urls.switch} alt="Switch"  />
                </li>
                {!saber.isDoubleBladed && <li>
                    <img src={urls.pommel} alt="Pommel"  />
                </li>}
                {saber.isDoubleBladed && <li>
                    <img src={urls.switch2} alt="Switch2" style={{transform: "rotate(180deg)"}} />
                </li>}
                {saber.isDoubleBladed && <li>
                    <img src={urls.guard2} alt="Guard2" style={{transform: "rotate(180deg)"}} />
                </li>}
                {!isBladeOn && saber.isDoubleBladed && <li>
                    <img src={urls.emitter2} alt="Emitter2"style={{transform: "rotate(180deg)"}} />
                </li>}
                {isBladeOn && saber.isDoubleBladed && <li>
                    <img src={urls.coloredEmitter2} alt="ColoredEmitter2" style={{transform: "rotate(180deg)"}} />
                </li>}
            </ul>
        </>
    )
}

export default SandboxSaberImage