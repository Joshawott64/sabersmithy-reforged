import axios from "axios"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

const ForumPostLikeButton = ({post, likeCount, setLikeCount, likeData, setLikeData}) => {

    const userId = useSelector((state) => state.userId)

    let userHasLiked = false

    if (userId) {
        for (let i = 0; i < likeData.length; i++) {
            // console.log('post:', post)
            if (likeData[i].userId === userId) {
                userHasLiked = true
            }
        }
    }

    const handleLike = async () => {
        const newLike = {userId: userId, postId: post.postId}

        const newLikeData = await axios.post('/api/like', newLike)

        userHasLiked = true

        setLikeData(newLikeData.data)
        setLikeCount(likeCount + 1)
        }
        
        const handleUnlike = async () => {
            const newLikeData = await axios.delete(`/api/unlike/${userId}`)
            
            userHasLiked = false
            
            setLikeData(newLikeData.data)
            setLikeCount(likeCount - 1)
    }

    return (
        <>
            {!userHasLiked && <button onClick={handleLike}>Like</button>}
            {userHasLiked && <button onClick={handleUnlike}>Unlike</button>}
        </>
    )
}

export default ForumPostLikeButton