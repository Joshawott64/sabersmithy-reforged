import axios from "axios"

const ForumPostDeleteButton = ({post, setPostData}) => {

    const handleDelete = async () => {
        const newPostData = await axios.delete(`/api/post/delete/${post.postId}`)
        setPostData(newPostData.data)
    }

    return (
        <>
            <button onClick={handleDelete}>Delete</button>
        </>
    )
}

export default ForumPostDeleteButton