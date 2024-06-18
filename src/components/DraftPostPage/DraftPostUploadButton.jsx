import axios from "axios"
import { useNavigate } from "react-router-dom"

const DraftPostUploadButton = ({postData}) => {

    const navigate = useNavigate()

    const handleUpload = async () => {
        await axios.post('/api/create-post', postData)
        navigate('/forum')
    }

    return (
        <button onClick={handleUpload}>Upload</button>
    )
}

export default DraftPostUploadButton