import DraftPostDiscardButton from "./DraftPostDiscardButton.jsx"
import DraftPostInput from "./DraftPostInput"
import DraftPostPreviewImage from "./DraftPostPreviewImage"
import DraftPostUploadButton from "./DraftPostUploadButton"
import React, { useState } from "react"

const DraftPostTable = ({state}) => {

    const { saber } = state

    const [description, setDescription] = useState('Post description...')

    const postData = {
        userId: saber.userId,
        saberId: saber.saberId,
        body: description
    }

    // console.log('saber:', saber)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <h4>{saber.name}</h4>
                            <DraftPostPreviewImage saber={saber} />
                        </td>
                        <td>
                            <DraftPostInput 
                                saber={saber} 
                                description={description}
                                setDescription={setDescription}
                            />
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>
                            <DraftPostUploadButton postData={postData} />
                            <DraftPostDiscardButton />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default DraftPostTable