import GalleryImageList from './GalleryImageList.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'

const GalleryTableCell = ({saber, saberId}) => {

    const [urls, setUrls] = useState({})

    useEffect(() => {
        axios.post('/api/gallery/urls', saber)
            .then((res) => {
                setUrls(res.data)
            })
    }, [])

    return (
        <tr>
            <td>{saber.name}</td>
            <td>
                <img src={urls.color} alt="Color" />
            </td>
            <td>
                <GalleryImageList 
                    saber={saber}
                    urls={urls}
                />
            </td>
            <td>edit</td>
            <td>delete</td>
        </tr>
    )
}

export default GalleryTableCell