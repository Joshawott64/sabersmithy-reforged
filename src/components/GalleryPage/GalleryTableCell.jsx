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
        // <tr>
        //     <td>{saber.name}</td>
        //     <td>
        //         <img src={urls.color} alt="Color" />
        //     </td>
        //     <td>
        //         <GalleryImageList 
        //             saber={saber}
        //             urls={urls}
        //         />
        //     </td>
        //     <td>
        //         <GalleryEditButton 
        //             saber={saber}
        //             urls={urls}
        //         />
        //     </td>
        //     <td>
        //         <GalleryDeleteButton 
        //             saber={saber}
        //             setSaberData={setSaberData}
        //         />
        //     </td>
        //     <td>
        //         <GalleryPostButton 
        //             saber={saber}
        //         />
        //     </td>
        // </tr>
        // 
        // ASK SCOTT HOW TO SCALE USING HEIGHT IF POSSIBLE
        <div className="flex flex-col justify-between border-4 border-black rounded-lg bg-neutral-300 max-h-60">
            <div className="flex-col h-full">
                <div className="flex flex-row justify-between">
                    <div className="self-start max-h-60">
                        <GalleryImageList saber={saber} urls={urls} />
                    </div>
                    <div className="self-start">
                        <img src={urls.color} alt="Color"/>
                    </div>
                </div>
            </div>
            <div className="flex-row">
                <p className="w-full">{saber.name}</p>
                <GalleryEditButton saber={saber} urls={urls}/>
                <GalleryDeleteButton saber={saber} setSaberData={setSaberData}/>
                <GalleryPostButton saber={saber}/>
            </div>
        </div>

//         <div className="flex flex-col justify-between border-4 border-black rounded-lg bg-neutral-300 max-h-60">
//     <div className="flex-grow overflow-hidden">
//         <div className="flex flex-row justify-between">
//             <div className="self-start max-h-60 overflow-hidden flex-grow">
//                 <GalleryImageList saber={saber} urls={urls} />
//             </div>
//             <div className="self-start max-h-60 flex-grow">
//                 <img src={urls.color} alt="Color" className="h-full w-auto object-contain" />
//             </div>
//         </div>
//     </div>
//     <div className="flex flex-row justify-between">
//         <p className="w-full">{saber.name}</p>
//         <GalleryEditButton saber={saber} urls={urls} />
//         <GalleryDeleteButton saber={saber} setSaberData={setSaberData} />
//         <GalleryPostButton saber={saber} />
//     </div>
// </div>

/* <div className="flex flex-col justify-between border-4 border-black rounded-lg bg-neutral-300 max-h-60">
    <div className="flex-grow overflow-hidden">
        <div className="flex flex-row justify-between max-h-60">
            <div className="self-start flex-grow max-h-60">
                <GalleryImageList saber={saber} urls={urls} />
            </div>
            <div className="self-start flex-grow max-h-60">
                <img src={urls.color} alt="Color" className="h-full w-full object-contain" />
            </div>
        </div>
    </div>
    <div className="flex flex-row justify-between">
        <p className="w-full">{saber.name}</p>
        <GalleryEditButton saber={saber} urls={urls} />
        <GalleryDeleteButton saber={saber} setSaberData={setSaberData} />
        <GalleryPostButton saber={saber} />
    </div>
</div> */


    )
}

export default GalleryTableCell