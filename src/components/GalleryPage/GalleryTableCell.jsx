import GalleryImageList from './GalleryImageList.jsx'
import axios from 'axios'

const GalleryTableCell = ({saber, saberId}) => {

    return (
        <tr>
            <td>{saber.name}</td>
            <td>color</td>
            <td>
                <GalleryImageList 
                    saber={saber}
                />
            </td>
            <td>edit</td>
            <td>delete</td>
        </tr>
    )
}

export default GalleryTableCell