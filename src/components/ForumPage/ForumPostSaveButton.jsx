import axios from "axios"

const ForumPostSaveButton = ({post, postBody, setIsEditing}) => {

    console.log('post:', post)
    console.log('postBody:', postBody)

    const handleSave = async () => {
        post.body = postBody
        await axios.put(`/api/post/edit/${post.postId}`, post)
        setIsEditing(false)
    }

    return (
        <button onClick={handleSave}>Save Changes</button>
    )
}

export default ForumPostSaveButton