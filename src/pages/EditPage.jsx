import EditTable from "../components/EditPage/EditTable"
import { useLocation } from "react-router-dom"
import axios from "axios"
import edit from "../assets/GUIComponents/Edit.png"

function EditPage() {

    const { state } = useLocation()

    console.log('state:', state)

    return (
        <>
        <div className="flex flex-col place-items-center my-2 gap-y-2">
            <img className="w-3/8" src={edit} alt="Edit" />
            <EditTable state={state} />
        </div>
        </>
    )
}

export default EditPage