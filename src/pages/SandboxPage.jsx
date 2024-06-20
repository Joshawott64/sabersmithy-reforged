import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import SandboxSaberImage from "../components/SandboxPage/SandboxSaberImage.jsx"
import SandboxSoundButtons from "../components/SandboxPage/SandboxSoundButtons.jsx"
import SandboxBladeToggleButton from "../components/SandboxPage/SandboxBladeToggleButton.jsx"

const SandboxPage = () => {

    const userId = useSelector((state) => state.userId)

    const { state } = useLocation()
    const { saber, urls } = state

    const [isBladeOn, setIsBladeOn] = useState(false)

    console.log('saber:', saber)
    console.log('urls:', urls)

    return (
        <>
            <div>
                <h1>Sandbox Page</h1>
                <SandboxSoundButtons urls={urls} />
            </div>
            <div>
                <SandboxSaberImage saber={saber} urls={urls} isBladeOn={isBladeOn} />
            </div>
            <div>
                <SandboxBladeToggleButton isBladeOn={isBladeOn} setIsBladeOn={setIsBladeOn} urls={urls} />
            </div>
        </>
    )
}

export default SandboxPage