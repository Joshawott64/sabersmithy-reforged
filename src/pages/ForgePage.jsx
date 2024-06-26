import React from "react"
import forge from "../assets/GUIComponents/Forge.png"
import ForgeTable from "../components/ForgePage/ForgeTable"

const ForgePage =  () => {
    return (
        <>
        <div className="flex flex-col place-items-center my-2">
            <img className="w-1/2" src={forge} alt="Forge" />
            <ForgeTable />
        </div>
        </>
    )
}

export default ForgePage