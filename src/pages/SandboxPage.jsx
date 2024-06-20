import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import SandboxSaberImage from "../components/SandboxPage/SandboxSaberImage.jsx"

const SandboxPage = () => {

    const userId = useSelector((state) => state.userId)

    const { state } = useLocation()
    const { saber, urls } = state

    console.log('saber:', saber)
    console.log('urls:', urls)

    return (
        <>
            <h1>Sandbox Page</h1>
            <div>
                <SandboxSaberImage saber={saber} urls={urls} />
            </div>
        </>
    )
}

export default SandboxPage