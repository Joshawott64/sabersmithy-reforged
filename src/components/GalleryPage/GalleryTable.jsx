import { useState, useEffect } from 'react'
import axios from 'axios'
import GalleryTableCell from './GalleryTableCell.jsx'

const saberData = await axios.get('/api/gallery')

const GalleryTable = () => {

    console.log('saberData.data:', saberData.data)

    const rows = saberData.data.map((el) => <GalleryTableCell 
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