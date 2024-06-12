const ForgeSaberPreview = ({clientEmitter, clientEmitter2, clientColoredEmitter, clientColoredEmitter2, clientGuard, clientGuard2, clientSwitch, clientSwitch2, clientPommel, forgeMode, isBladeOn}) => {

    return (
        <ul>
            {!isBladeOn && <li>
                <img src={clientEmitter.image} alt={clientEmitter.emitterCode} />
            </li>}
            {isBladeOn && <li>
                <img src={clientColoredEmitter.image} alt={clientColoredEmitter.coloredEmitterCode} />
            </li>}
            <li>
                <img src={clientGuard.image} alt={clientGuard.guardCode} />
            </li>
            <li>
                <img src={clientSwitch.image} alt={clientSwitch.switchCode} />
            </li>
            {forgeMode === 'Single' && <li>
                <img src={clientPommel.image} alt={clientPommel.pommelCode} />
            </li>}
            {forgeMode === 'Double' && <li>
                <img src={clientSwitch2.image} alt={clientSwitch2.switchCode} />
            </li>}
            {forgeMode === 'Double' && <li>
                <img src={clientGuard2.image} alt={clientGuard2.guardCode} />
            </li>}
            {forgeMode === 'Double' && <li>
                <img src={clientEmitter2.image} alt={clientEmitter2.emitterCode} />
            </li>}
        </ul>
    )
}

export default ForgeSaberPreview