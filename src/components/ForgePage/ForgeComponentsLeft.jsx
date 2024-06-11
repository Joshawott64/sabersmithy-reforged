const ForgeComponentsLeft = ({emitters, setClientEmitter, guards, setClientGuard, switches, setClientSwitch, pommels, setClientPommel}) => {

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
            <li key="pommels">
                { pommelList }
            </li>
        </ul>
    )
}

export default ForgeComponentsLeft