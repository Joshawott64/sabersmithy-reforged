import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import GalleryTableCell from './GalleryTableCell.jsx'

const initialSaberData = await axios.get('/api/gallery/default-sabers')
console.log('initialSaberData.data:', initialSaberData.data)

const GalleryTable = () => {

    const [saberData, setSaberData] = useState(initialSaberData.data)

    const userId = useSelector((state) => state.userId)
  
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log('(inside of useEffect) saberData:', saberData)
        if (userId) {
            axios.get(`/api/gallery/${userId}`)
                .then((res) => {
                    // console.log('res.data:', res.data)
                    setSaberData(res.data)
                })
        }
    }, [])

    // console.log('(outside of useEffect()) saberData:', saberData)
    
    const cells = saberData.map((el) => <GalleryTableCell 
    saber={el}
    saberId={el.saberId}
    key={el.saberId}
    setSaberData={setSaberData}
    />)
    
    return (
        // <table>
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>Color</th>
        //             <th>Preview</th>
        //             <th></th>
        //             <th></th>
        //             <th></th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         { rows }
        //     </tbody>
        // </table>
        <div className="grid grid-cols-4 gap-3">
            { cells }
        </div>
    )
}

export default GalleryTable