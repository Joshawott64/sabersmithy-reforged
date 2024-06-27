import axios from "axios"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'
import ForumPostPreviewImage from "./ForumPostPreviewImage.jsx"
import ForumPostDescription from "./ForumPostDescription.jsx"
import ForumPostEditButton from "./ForumPostEditButton.jsx"
import ForumPostDeleteButton from "./ForumPostDeleteButton.jsx"
import ForumPostSaveButton from "./ForumPostSaveButton.jsx"
import ForumPostDiscardButton from "./ForumPostDiscardButton.jsx"
import ForumPostLikeButton from "./ForumPostLikeButton.jsx"

const ForumPost = ({post, setPostData, colorFilter, bladeStyleFilter, soundfontFilter, bladeNumberFilter}) => {

    const userId = useSelector((state) => state.userId)

    // console.log('post:', post)

    const [subjectSaber, setSubjectSaber] = useState({})
    const [likeData, setLikeData] = useState([])
    const [likeCount, setLikeCount] = useState(0)
    const [isEditing, setIsEditing] = useState(false)
    const [postBody, setPostBody] = useState(post.body)

    let matchesFilters = true


    useEffect(() => {
        axios.get(`/api/select/${post.saberId}`)
            .then((res) => {
                setSubjectSaber(res.data)
            })

        axios.get(`/api/likes/${post.postId}`)
            .then((res) => {
                setLikeData(res.data)
                setLikeCount(res.data.length)
            })
    }, [])

    if (colorFilter !== undefined && subjectSaber.colorId !== colorFilter) {
        matchesFilters = false
    }

    if (bladeStyleFilter !== undefined && subjectSaber.bladeStyle !== bladeStyleFilter) {
        matchesFilters = false
    }

    if (soundfontFilter !== undefined && subjectSaber.soundfontId !== soundfontFilter) {
        matchesFilters = false
    }

    if (bladeNumberFilter !== undefined && subjectSaber.isDoubleBladed !== bladeNumberFilter) {
        matchesFilters = false
    }

    // console.log(`${likeCount} likes for ${post.postId}`)

    return (
        <>
           {matchesFilters && <div className="flex flex-col w-72 border-2 border-slate-600 bg-yellow-100 rounded-md">
                <h4 className=" bg-yellow-100 rounded-md">{subjectSaber.name}</h4>
                <div className="flex flex-row bg-zinc-50">
                    {subjectSaber.saberId && <ForumPostPreviewImage subjectSaber={subjectSaber} />}
                    {post.postId && <ForumPostDescription post={post} isEditing={isEditing} setPostBody={setPostBody} />}
                </div>
                <div className="flex justify-evenly space-x-4 p-1">
                    <p>{likeCount} likes</p>
                    <ForumPostLikeButton post={post} likeCount={likeCount} setLikeCount={setLikeCount} likeData={likeData} setLikeData={setLikeData} />
                    {!isEditing && userId === post.userId && <ForumPostEditButton isEditing={isEditing} setIsEditing={setIsEditing} />}
                    {!isEditing && userId === post.userId && <ForumPostDeleteButton post={post} setPostData={setPostData} />}
                    {isEditing && userId === post.userId && <ForumPostSaveButton post={post} postBody={postBody} setIsEditing={setIsEditing} />}
                    {isEditing && userId === post.userId && <ForumPostDiscardButton setIsEditing={setIsEditing}/>}
                </div>
            </div>}
        </>
    )
}

export default ForumPost