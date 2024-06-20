const SandboxBladeToggleButton = ({isBladeOn, setIsBladeOn, urls}) => {

    const handleBladeToggle = () => {
        if (isBladeOn) {
            new Audio(urls.sounds.deactivate).play()
            setIsBladeOn(false)
        } else {
            new Audio(urls.sounds.ignite).play()
            setIsBladeOn(true)
        }
    }

    return (
        <button onClick={handleBladeToggle}>Toggle Blade</button>
    )
}

export default SandboxBladeToggleButton