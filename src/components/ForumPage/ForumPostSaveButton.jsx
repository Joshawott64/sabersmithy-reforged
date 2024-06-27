import axios from "axios"

const ForumPostSaveButton = ({post, postBody, setIsEditing}) => {

    // console.log('post:', post)
    // console.log('postBody:', postBody)

    const handleSave = async () => {
        post.body = postBody
        await axios.put(`/api/post/edit/${post.postId}`, post)
        setIsEditing(false)
    }

    return (
        <button className="w-1/3 border-2 border-slate-600 rounded-sm bg-white text-slate-800" onClick={handleSave}>Save Changes</button>
    )
}

export default ForumPostSaveButton