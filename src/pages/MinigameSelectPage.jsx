import React, { useState } from "react"
import MinigameSelectButtons from "../components/MinigameSelectPage/MinigameSelectButtons.jsx"
import minigames from "../assets/GUIComponents/Minigames.png"

function MinigameSelectPage() {

    const minigameData = [
        {
            name: 'Sandbox',
            description: 'Swoosh your saber, test your sounds, and have fun.',
            isOpen: true
        },
        {
            name: 'Saber Pong',
            description: 'Coming soon',
            isOpen: false
        }
    ]

    const minigameList = minigameData.map((el) => <MinigameSelectButtons 
        name={el.name}
        key={el.name}
        description={el.description}
        isOpen={el.isOpen}
    />)

    return (
        <div className="flex flex-col place-items-center my-2 gap-y-3">
            <img className="w-1/2" src={minigames} alt="Minigames" />
            <div className="grid grid-cols-1 gap-3">
                { minigameList }
            </div>
        </div>
    )
}

export default MinigameSelectPage