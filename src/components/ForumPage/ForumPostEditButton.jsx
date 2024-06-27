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
            <button className="w-1/6 border-2 border-slate-600 rounded-sm bg-white text-slate-800" onClick={handleEditMode}>Edit</button>
        </>
    )
}

export default ForumPostEditButton