import EditTable from "../components/EditPage/EditTable"
import { useLocation } from "react-router-dom"
import axios from "axios"

function EditPage() {

    const { state } = useLocation()

    console.log('state:', state)

    return (
        <>
            <h1>Edit Page</h1>
            <EditTable state={state} />
        </>
    )
}

export default EditPage