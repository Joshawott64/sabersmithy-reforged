import { useNavigate } from "react-router-dom"

const DraftPostDiscardButton = () => {

    const navigate = useNavigate()

    return (
        <button onClick={() => navigate('/gallery')}>Discard</button>
    )
}

export default DraftPostDiscardButton