import { useNavigate } from "react-router-dom"

function HomePage() {

    const navigate = useNavigate()

    return (
        <>
            <h1>Home Page</h1>
            <ul>
                <li>
                    <button onClick={() => navigate('/forge')}>Forge</button>
                </li>
                <li>
                    <button onClick={() => navigate('/gallery')}>Gallery</button>
                </li>
                <li>
                    <button onClick={() => navigate('/minigames')}>Minigames</button>
                </li>
                <li>
                    <button onClick={() => navigate('/forum')}>Forum</button>  
                </li>
            </ul>
        </>
    )
}

export default HomePage