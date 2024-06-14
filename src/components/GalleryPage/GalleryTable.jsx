import { useState, useEffect } from 'react'
import axios from 'axios'
import GalleryTableCell from './GalleryTableCell.jsx'

let initialSaberData = await axios.get('/api/gallery')
console.log('initialSaberData.data:', initialSaberData.data)

const GalleryTable = () => {

    const [saberData, setSaberData] = useState(initialSaberData.data)

    useEffect(() => {
        console.log('(inside of useEffect) saberData:', saberData)

        axios.get('/api/gallery')
            .then((res) => {
                console.log('res.data:', res.data)
                setSaberData(res.data)
            })
    }, [])

    console.log('(outside of useEffect()) saberData:', saberData)
    
    const rows = saberData.map((el) => <GalleryTableCell 
    saber={el}
    saberId={el.saberId}
    key={el.saberId}
    setSaberData={setSaberData}
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