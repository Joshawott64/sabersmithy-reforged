const SandboxSoundButtons = ({urls}) => {

    const handleSoundButton = (sound) => {
        new Audio(urls.sounds[sound]).play()
    }

    return (
        <>
            <label htmlFor="saber-sounds">Sounds:</label>
            <div id="saber-sounds">
                <button onClick={() => handleSoundButton('clash1')}>Clash1</button>
                <button onClick={() => handleSoundButton('clash2')}>Clash2</button>
                <button onClick={() => handleSoundButton('clash3')}>Clash3</button>
                <button onClick={() => handleSoundButton('deflect')}>Deflect</button>
                <button onClick={() => handleSoundButton('swoosh1')}>Swoosh1</button>
                <button onClick={() => handleSoundButton('swoosh2')}>Swoosh2</button>
                <button onClick={() => handleSoundButton('swoosh3')}>Swoosh3</button>
            </div>
        </>
    )
}

export default SandboxSoundButtons