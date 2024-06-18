const ForumPostDiscardButton = ({setIsEditing}) => {
    return (
        <button onClick={() => setIsEditing(false)}>Discard Changes</button>
    )
}

export default ForumPostDiscardButton