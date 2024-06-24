import gallery from "../assets/GUIComponents/Gallery.png"
import GalleryTable from '../components/GalleryPage/GalleryTable.jsx'

function GalleryPage() {
    return (
        <>
            <img src={gallery} alt="Gallery" />
            <GalleryTable />
        </>
    )
}

export default GalleryPage