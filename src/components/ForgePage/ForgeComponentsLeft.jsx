const ForgeComponentsLeft = ({colors, setClientColor, emitters, clientEmitter, clientEmitter2, setClientEmitter, setClientEmitter2, setClientColoredEmitter, setClientColoredEmitter2, guards, setClientGuard, switches, setClientSwitch, pommels, setClientPommel, forgeMode, updateColoredEmitter, updateColoredEmitter2, clientColor, clientBladeStyle, setClientBladeStyle}) => {

    const emitterList = emitters.map((el) => <img 
        src={el.image} 
        alt={el.emitterCode}
        key={el.emitterId}
        onClick={() => {
            setClientEmitter(el)
            updateColoredEmitter(el.emitterCode, clientColor.colorCode, clientBladeStyle)
            }
        }
    />)

    const guardList = guards.map((el) => <img 
        src={el.image} 
        alt={el.guardCode} 
        key={el.guardId}
        onClick={() => setClientGuard(el)}
    />)

    const switchList = switches.map((el) => <img 
        src={el.image} 
        alt={el.switchCode} 
        key={el.switchId}
        onClick={() => setClientSwitch(el)}
    />)

    const pommelList = pommels.map((el) => <img 
        src={el.image} 
        alt={el.pommelCode} 
        key={el.pommelId}
        onClick={() => setClientPommel(el)}
    />)

    const colorList = colors.map((el) => <img 
        src={el.image}
        alt={el.colorCode}
        key={el.colorId}
        onClick={() => {
            setClientColor(el)
            updateColoredEmitter(clientEmitter.emitterCode, el.colorCode, clientBladeStyle)
            updateColoredEmitter2(clientEmitter2.emitterCode, el.colorCode, clientBladeStyle)
            }
        }
    />)

    return (
        <ul>
            <label htmlFor="emitters">Emitters:</label>
            <li key="emitters">
                { emitterList }
            </li>
            <label htmlFor="guards">Guards:</label>
            <li key="guards">
                { guardList }
            </li>
            <label htmlFor="switches">Switches:</label>
            <li key="switches">
                { switchList }
            </li>
            {forgeMode === 'Single' && <label htmlFor="pommels">Pommels:</label>}
            {forgeMode === 'Single' && <li key="pommels">
                { pommelList }
            </li>}
            {forgeMode === 'Double' && <label htmlFor="colors">Colors:</label>}
            {forgeMode === 'Double' && <li key="colors">
                { colorList }
            </li>}
            {forgeMode === 'Double' && <label htmlFor="blade-styles">Blade Styles:</label>}
            {forgeMode === 'Double' && <li key="blade-styles">
                <button onClick={() => {
                        setClientBladeStyle('Stable')
                        updateColoredEmitter(clientEmitter.emitterCode, clientColor.colorCode, 'Stable')
                        updateColoredEmitter2(clientEmitter2.emitterCode, clientColor.colorCode, 'Stable')
                    }}>Stable</button>

                    <button onClick={() => {
                        setClientBladeStyle('Unstable')
                        updateColoredEmitter(clientEmitter.emitterCode, clientColor.colorCode, 'Unstable')
                        updateColoredEmitter2(clientEmitter2.emitterCode, clientColor.colorCode, 'Unstable')
                    }}>Unstable</button>
            </li>}
        </ul>
    )
}

export default ForgeComponentsLeft