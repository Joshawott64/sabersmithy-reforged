import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useLocation } from "react-router-dom"
import SandboxSaberImage from "../components/SandboxPage/SandboxSaberImage.jsx"
import SandboxSoundButtons from "../components/SandboxPage/SandboxSoundButtons.jsx"

const SandboxPage = () => {

    const userId = useSelector((state) => state.userId)

    const { state } = useLocation()
    const { saber, urls } = state

    const [isBladeOn, setIsBladeOn] = useState(false)

    let rotationAngle = 0

    // console.log('saber:', saber)
    // console.log('urls:', urls)

    useEffect(() => {
        let elem = document.querySelector('.mover'), 
         div = document.querySelector('.move'), 
         x = 0, 
         y = 0, 
         mousedown = false
      
        // div event mousedown 
        div.addEventListener('mousedown', function (e) { 
            // set mouse state to true 
            mousedown = true
            // subtract offset 
            x = div.offsetLeft - e.clientX 
            y = div.offsetTop - e.clientY 
            e.preventDefault() // prevent browser's default drag behavior 
        }, true); 

        div.addEventListener('dragstart', (e) => {
            console.log('dragging')
            new Audio(urls.sounds.swoosh1).play()
        }, true)
        
        // div event mouseup 
        div.addEventListener('mouseup', function (e) { // Notice the change here 
            // set mouse state to false 
            mousedown = false
        }, true) 
        
        // element mousemove to stop 
        elem.addEventListener('mousemove', function (e) {
            // Is mouse pressed? 
            if (mousedown) { 
                // now we calculate the difference 
                div.style.left = e.clientX + x + 'px'
                div.style.top = e.clientY + y + 'px'
            } 
        }, true)

        
        }, [])
        
    useEffect(() => {
        const keypressed = (e) => {
            if (e.key === 't') {
                handleBladeToggle()
            } else if (e.key === 'a') {
                handleRotation('counter-clockwise')
            } else if (e.key === 'd') {
                handleRotation('clockwise')
            }
        }
        window.addEventListener('keypress', keypressed)

        return () => {
            window.removeEventListener('keypress', keypressed)
        }
    }, [isBladeOn])

    const handleBladeToggle = () => {
        if (isBladeOn) {
            new Audio(urls.sounds.deactivate).play()
            setIsBladeOn(false)
        } else {
            new Audio(urls.sounds.ignite).play()
            setIsBladeOn(true)
        }
    }

    const handleRotation = (direction) => {
        let div = document.querySelector('.move')
        console.log('div:', div)

        if (direction === 'counter-clockwise') {
            console.log('rotating counter-clockwise')
            rotationAngle -= 5
            div.style.rotate = `${rotationAngle}deg`
        } else {
            console.log('rotating clockwise')
            rotationAngle += 5
            div.style.rotate = `${rotationAngle}deg`
        }
    }

    return (
        <div className="flex flex-col place-items-center my-2 gap-y-3">
            <div className="flex flex-col gap-y-3">
                <h1 className="text-6xl text-yellow-300 font-bold">Sandbox</h1>
                <SandboxSoundButtons urls={urls} />
                <div className="flex flex-col p-2 border-4 text-slate-800 bg-slate-300 border-slate-800 rounded-md">
                    <p>Press 't' key to toggle blade, press 'a' and 'd' keys to rotate saber</p>
                    <p>Drag the saber around with your cursor</p>
                </div>
            </div>
            <div className="mover">
                <div className="move">
                    <SandboxSaberImage saber={saber} urls={urls} isBladeOn={isBladeOn} />
                </div>
            </div>
        </div>
    )
}

export default SandboxPage