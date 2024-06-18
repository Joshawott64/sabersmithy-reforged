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

const ForumPost = ({post, setPostData}) => {

    const userId = useSelector((state) => state.userId)

    // console.log('post:', post)

    const [subjectSaber, setSubjectSaber] = useState({})
    const [likeCount, setLikeCount] = useState(0)
    const [isEditing, setIsEditing] = useState(false)
    const [postBody, setPostBody] = useState(post.body)


    useEffect(() => {
        axios.get(`/api/select/${post.saberId}`)
            .then((res) => {
                setSubjectSaber(res.data)
            })

        axios.get(`/api/likes/${post.postId}`)
            .then((res) => {
                setLikeCount(res.data.length)
            })
    }, [])

    // console.log(`${likeCount} likes for ${post.postId}`)

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
                            <h4>{subjectSaber.name}</h4>
                            {subjectSaber.saberId && <ForumPostPreviewImage subjectSaber={subjectSaber} />}
                        </td>
                        <td>
                            {post.postId && <ForumPostDescription post={post} isEditing={isEditing} setPostBody={setPostBody} />}
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>{likeCount} likes</td>
                        <td>
                            <ForumPostLikeButton post={post} likeCount={likeCount} setLikeCount={setLikeCount}/>
                            {!isEditing && userId === post.userId && <ForumPostEditButton isEditing={isEditing} setIsEditing={setIsEditing} />}
                            {!isEditing && userId === post.userId && <ForumPostDeleteButton post={post} setPostData={setPostData} />}
                            {isEditing && userId === post.userId && <ForumPostSaveButton post={post} postBody={postBody} setIsEditing={setIsEditing} />}
                            {isEditing && userId === post.userId && <ForumPostDiscardButton setIsEditing={setIsEditing}/>}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}

export default ForumPost