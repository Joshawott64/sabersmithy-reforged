const ForgeComponentsLeft = ({colors, setClientColor, emitters, clientEmitter, setClientEmitter, setClientEmitter2, setClientColoredEmitter, setClientColoredEmitter2, guards, setClientGuard, switches, setClientSwitch, pommels, setClientPommel, forgeMode, updateColoredEmitter, clientColor, clientBladeStyle, setClientBladeStyle}) => {

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
            }
        }
    />)

    return (
        <ul>
            <li key="emitters">
                { emitterList }
            </li>
            <li key="guards">
                { guardList }
            </li>
            <li key="switches">
                { switchList }
            </li>
            {forgeMode === 'Single' && <li key="pommels">
                { pommelList }
            </li>}
            {forgeMode === 'Double' && <li key="colors">
                { colorList }
            </li>}
            {forgeMode === 'Double' && <li>
                <input type="radio" id="stable" name="blade_style" onChange={() => {
                    setClientBladeStyle('Stable')
                    updateColoredEmitter(clientEmitter.emitterCode, clientColor.colorCode, clientBladeStyle)
                    }
                } />
                <label htmlFor="unstable">Stable</label>
                <input type="radio" id="unstable" name="blade_style" onChange={() => {
                    setClientBladeStyle('Unstable')
                    updateColoredEmitter(clientEmitter.emitterCode, clientColor.colorCode, clientBladeStyle)
                    }
                } />
                <label htmlFor="unstable">Unstable</label>
            </li>}
        </ul>
    )
}

export default ForgeComponentsLeft