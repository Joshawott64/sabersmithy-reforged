import React from "react"

const ForgeComponentsRight = ({handleForgeMode, colors, clientColor, setClientColor, emitters, clientEmitter, clientEmitter2, setClientEmitter2, setClientColoredEmitter, setClientColoredEmitter2, guards, setClientGuard2, switches, setClientSwitch2, soundfonts, setClientSoundfont, clientBladeStyle, setClientBladeStyle, forgeMode, updateColoredEmitter, updateColoredEmitter2}) => {

    const emitterList = emitters.map((el) => <img 
        src={el.image} 
        alt={el.emitterCode}
        key={el.emitterId}
        onClick={() => {
            setClientEmitter2(el)
            updateColoredEmitter2(el.emitterCode, clientColor.colorCode, clientBladeStyle)
            }
        }
    />)

    const guardList = guards.map((el) => <img 
        src={el.image} 
        alt={el.guardCode} 
        key={el.guardId}
        onClick={() => setClientGuard2(el)}
    />)

    const switchList = switches.map((el) => <img 
        src={el.image} 
        alt={el.switchCode} 
        key={el.switchId}
        onClick={() => setClientSwitch2(el)}
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

    const soundfontList = soundfonts.map((el) => <React.Fragment key={el.soundfontId}>
        <input
        type="radio"
        key={el.soundfontId}
        name="soundfonts"
        onChange={() => setClientSoundfont(el)}
        />
        <label htmlFor="soundfonts">{el.soundfontCode}</label>
    </React.Fragment>)

    return (
        <ul>
            {forgeMode === 'Single' && <li key="colors">
                { colorList }
            </li>}
            {forgeMode === 'Double' && <li key="emitters">
                { emitterList }
            </li>}
            {forgeMode === 'Double' && <li key="guards">
                { guardList }
            </li>}
            {forgeMode === 'Double' && <li key="switches">
                { switchList }
            </li>}
            <li>
                { soundfontList }
            </li>
            {forgeMode === 'Single' && <li>
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
            <li>
                <input type="radio" id="single" name="num_blades" onChange={() => handleForgeMode('Single')}/>
                <label htmlFor="single">Single</label>
                <input type="radio" id="double" name="num_blades" onChange={() => handleForgeMode('Double')}/>
                <label htmlFor="double">Double</label>
            </li>
        </ul>
    )
}

export default ForgeComponentsRight