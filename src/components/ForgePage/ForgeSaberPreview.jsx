const ForgeSaberPreview = ({clientEmitter, clientGuard, clientSwitch, clientPommel}) => {

    return (
        <ul>
            <li>
                <img src={clientEmitter.image} alt={clientEmitter.emitterCode} />
            </li>
            <li>
                <img src={clientGuard.image} alt={clientGuard.guardCode} />
            </li>
            <li>
                <img src={clientSwitch.image} alt={clientSwitch.switchCode} />
            </li>
            <li>
                <img src={clientPommel.image} alt={clientPommel.pommelCode} />
            </li>
        </ul>
    )
}

export default ForgeSaberPreview