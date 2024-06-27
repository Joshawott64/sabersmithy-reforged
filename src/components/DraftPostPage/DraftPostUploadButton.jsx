import axios from "axios"
import { useNavigate } from "react-router-dom"

const DraftPostUploadButton = ({postData}) => {

    const navigate = useNavigate()

    const handleUpload = async () => {
        await axios.post('/api/create-post', postData)
        navigate('/forum')
    }

    return (
        <button className="w-1/3 border-2 border-slate-600 rounded-sm bg-white text-slate-800" onClick={handleUpload}>Upload</button>
    )
}

export default DraftPostUploadButton