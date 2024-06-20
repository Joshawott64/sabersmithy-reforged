import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

const MinigameSelectButtons = ({name, description, isOpen}) => {

    const navigate = useNavigate()

    const [isSelected, setIsSelected] = useState(false)

    const handleMinigameSelect = () => {
        if (isSelected) {
            setIsSelected(false)
        } else {
            setIsSelected(true)
        }
    }

    return (
        <>
            <div>
                <button onClick={handleMinigameSelect}>{name}</button>
                {isSelected && <p>{description}</p>}
                {isSelected && isOpen && <button onClick={() => navigate('/select', {state: {name: name}})}>Play</button>}
                {isSelected && !isOpen && <button disabled>Play</button>}
                {isSelected && <button onClick={handleMinigameSelect}>Cancel</button>}
            </div>
        </>
    )
}

export default MinigameSelectButtons