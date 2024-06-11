const ForgeComponentsLeft = ({colors, setClientColor, emitters, setClientEmitter, guards, setClientGuard, switches, setClientSwitch, pommels, setClientPommel, forgeMode}) => {

    const emitterList = emitters.map((el) => <img 
        src={el.image} 
        alt={el.emitterCode}
        key={el.emitterId}
        onClick={() => setClientEmitter(el)}
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
        onClick={() => setClientColor(el)}
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
                Blade Styles go here
            </li>}
        </ul>
    )
}

export default ForgeComponentsLeft