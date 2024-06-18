import axios from "axios"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from 'react-redux'

const ForumPostLikeButton = ({post, likeCount, setLikeCount}) => {

    const userId = useSelector((state) => state.userId)

    // console.log('post:', post)

    const [likeData, setLikeData] = useState([])
    // const [userHasLiked, setUserHasLiked] = useState(false)
    let userHasLiked = false

    useEffect(() => {
        if (userId) {
            axios.get(`/api/likes/${post.saberId}`)
                .then((res) => {
                    setLikeData(res.data)
                })
        }
    }, [])

    console.log('likeData:', likeData)

    if (userId) {
        console.log('likeData.length:', likeData.length)
        for (let i = 0; i < likeData.length; i++) {
            console.log('post:', post)
            if (likeData[i].userId === userId) {
                console.log('i:', i)
                console.log('likeData[i].userId:', likeData[i].userId)
                console.log(`userId: ${userId} has liked post: ${post.postId}`)
                userHasLiked = true
            }
        }
    }

    return (
        <>
            {!userHasLiked && <button>Like</button>}
            {userHasLiked && <button>Unlike</button>}
        </>
    )
}

export default ForumPostLikeButton