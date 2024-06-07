import { useState, useEffect } from 'react'
import axios from 'axios'
import GalleryTableCell from './GalleryTableCell.jsx'

const GalleryTable = () => {

    const [saberData, setSaberData] = useState([])

    useEffect(() => {
        axios.get('/api/gallery')
            .then((res) => {
                setSaberData(res.data)
            })
    }, [])

    console.log('saberData:', saberData)

    const rows = saberData.map((el) => <GalleryTableCell 
        saber={el}
        saberId={el.saberId}
        key={el.saberId}
    />)

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Color</th>
                    <th>Preview</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { rows }
            </tbody>
        </table>
    )
}

export default GalleryTable