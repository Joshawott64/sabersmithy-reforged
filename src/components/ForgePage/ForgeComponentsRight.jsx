const ForgeComponentsRight = ({handleForgeMode, colors, setClientColor, emitters, setClientEmitter2, guards, setClientGuard2, switches, setClientSwitch2, forgeMode}) => {

    const emitterList = emitters.map((el) => <img 
        src={el.image} 
        alt={el.emitterCode}
        key={el.emitterId}
        onClick={() => setClientEmitter2(el)}
    />)

    console.log('emitters:', emitters)

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
        onClick={() => setClientColor(el)}
    />)

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
                Soundfonts go here
            </li>
            {forgeMode === 'Single' && <li>
                Blade Styles go here
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