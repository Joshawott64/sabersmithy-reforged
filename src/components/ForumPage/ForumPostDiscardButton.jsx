const ForumPostDiscardButton = ({setIsEditing}) => {
    return (
        <button className="w-1/3 border-2 border-slate-600 rounded-sm bg-white text-slate-800" onClick={() => setIsEditing(false)}>Discard Changes</button>
    )
}

export default ForumPostDiscardButton