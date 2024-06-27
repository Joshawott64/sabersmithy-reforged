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
            <div className="flex flex-col w-72 border-2 border-slate-600 rounded-md bg-yellow-100">
                <h4 className=" bg-yellow-100 rounded-md">{saber.name}</h4>
                <div className="flex flex-row bg-zinc-50">
                    <DraftPostPreviewImage saber={saber} />
                    <DraftPostInput 
                        saber={saber} 
                        description={description}
                        setDescription={setDescription}
                    />
                </div>
                <div className="flex justify-evenly space-x-4 p-1 bg-zinc-50">
                    <DraftPostUploadButton postData={postData} />
                    <DraftPostDiscardButton />
                </div>
            </div>
        </>
    )
}

export default DraftPostTable