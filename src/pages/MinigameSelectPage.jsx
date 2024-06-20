import React, { useState } from "react"
import MinigameSelectButtons from "../components/MinigameSelectPage/MinigameSelectButtons.jsx"

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
        <>
            <h1>Minigames Page</h1>
            { minigameList }
        </>
    )
}

export default MinigameSelectPage