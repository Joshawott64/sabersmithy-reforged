import GalleryImageList from './GalleryImageList.jsx'
import GalleryEditButton from './GalleryEditButton.jsx'
import GalleryDeleteButton from './GalleryDeleteButton.jsx'
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
            <td>
                <GalleryEditButton 
                    saber={saber}
                />
            </td>
            <td>
                <GalleryDeleteButton 
                    saber={saber}
                />
            </td>
        </tr>
    )
}

export default GalleryTableCell