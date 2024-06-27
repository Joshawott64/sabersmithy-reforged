const SandboxSoundButtons = ({urls}) => {

    const handleSoundButton = (sound) => {
        new Audio(urls.sounds[sound]).play()
    }

    return (
        <>
            <div className="flex flex-row space-x-3" id="saber-sounds">
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => handleSoundButton('clash1')}>Clash1</button>
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => handleSoundButton('clash2')}>Clash2</button>
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => handleSoundButton('clash3')}>Clash3</button>
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => handleSoundButton('deflect')}>Deflect</button>
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => handleSoundButton('swoosh1')}>Swoosh1</button>
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => handleSoundButton('swoosh2')}>Swoosh2</button>
                <button className="border-2 border-slate-600 rounded-sm bg-white w-1/3 text-slate-800" onClick={() => handleSoundButton('swoosh3')}>Swoosh3</button>
            </div>
        </>
    )
}

export default SandboxSoundButtons