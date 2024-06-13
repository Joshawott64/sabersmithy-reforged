import { useNavigate } from "react-router-dom"

function ErrorPage() {

    const navigate = useNavigate()

    return (
        <>
            <h1>Error Page</h1>
            <button onClick={() => navigate('/home')}>Return to homepage</button>
        </>
    )
}

export default ErrorPage