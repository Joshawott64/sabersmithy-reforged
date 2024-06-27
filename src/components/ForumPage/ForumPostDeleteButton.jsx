import axios from "axios"

const ForumPostDeleteButton = ({post, setPostData}) => {

    const handleDelete = async () => {
        const newPostData = await axios.delete(`/api/post/delete/${post.postId}`)
        setPostData(newPostData.data)
    }

    return (
        <>
            <button className="w-1/6 border-2 border-slate-600 rounded-sm bg-white text-slate-800" onClick={handleDelete}>Delete</button>
        </>
    )
}

export default ForumPostDeleteButton