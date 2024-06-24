import React from "react"
import forge from "../assets/GUIComponents/Forge.png"
import ForgeTable from "../components/ForgePage/ForgeTable"

const ForgePage =  () => {
    return (
        <>
            <img src={forge} alt="Forge" />
            <ForgeTable />
        </>
    )
}

export default ForgePage