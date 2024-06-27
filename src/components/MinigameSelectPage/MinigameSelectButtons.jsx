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
            <div className="flex flex-col space-y-2 items-center rounded-md border-4 bg-zinc-400 border-slate-600 p-2">
                <button className="h-12 w-24 font-bold rounded-md border-2 border-black" onClick={handleMinigameSelect}>{name}</button>
                {isSelected && <p className="w-full">{description}</p>}
                <div className="flex flex-row space-x-4">
                    {isSelected && isOpen && <button className="border-2 border-slate-600 rounded-sm bg-white w-full text-slate-800" onClick={() => navigate('/select', {state: {name: name}})}>Play</button>}
                    {isSelected && !isOpen && <button className="border-2 border-slate-400 rounded-sm bg-slate-200 w-full text-slate-400 cursor-not-allowed" disabled>Play</button>}
                    {isSelected && <button className="border-2 border-slate-600 rounded-sm bg-white w-full text-slate-800" onClick={handleMinigameSelect}>Cancel</button>}
                </div>
            </div>
        </>
    )
}

export default MinigameSelectButtons