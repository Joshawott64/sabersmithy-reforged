const ForumPostEditButton = ({isEditing, setIsEditing}) => {

    const handleEditMode = () => {
        if (isEditing) {
            setIsEditing(false)
        } else {
            setIsEditing(true)
        }
    }

    return (
        <>
            <button onClick={handleEditMode}>Edit</button>
        </>
    )
}

export default ForumPostEditButton