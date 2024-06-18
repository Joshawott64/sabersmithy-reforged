import GalleryImageList from './GalleryImageList.jsx'
import GalleryEditButton from './GalleryEditButton.jsx'
import GalleryDeleteButton from './GalleryDeleteButton.jsx'
import GalleryPostButton from './GalleryPostButton.jsx'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const GalleryTableCell = ({saber, saberId, setSaberData}) => {

    const [urls, setUrls] = useState({})

    useEffect(() => {
        axios.post('/api/gallery/urls', saber)
            .then((res) => {
                setUrls(res.data)
            })
    }, [])

    // console.log('urls:', urls)

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
                    urls={urls}
                />
            </td>
            <td>
                <GalleryDeleteButton 
                    saber={saber}
                    setSaberData={setSaberData}
                />
            </td>
            <td>
                <GalleryPostButton 
                    saber={saber}
                />
            </td>
        </tr>
    )
}

export default GalleryTableCell