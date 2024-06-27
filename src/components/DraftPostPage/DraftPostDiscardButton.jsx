import { useNavigate } from "react-router-dom"

const DraftPostDiscardButton = () => {

    const navigate = useNavigate()

    return (
        <button className="w-1/3 border-2 border-slate-600 rounded-sm bg-white text-slate-800" onClick={() => navigate('/gallery')}>Discard</button>
    )
}

export default DraftPostDiscardButton