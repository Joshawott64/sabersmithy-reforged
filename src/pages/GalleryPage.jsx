import gallery from "../assets/GUIComponents/Gallery.png"
import GalleryTable from '../components/GalleryPage/GalleryTable.jsx'

function GalleryPage() {
    return (
        <>
            <div className="flex flex-col place-items-center my-2">
                <img className="w-1/2" src={gallery} alt="Gallery" />
                <GalleryTable />
            </div>
        </>
    )
}

export default GalleryPage