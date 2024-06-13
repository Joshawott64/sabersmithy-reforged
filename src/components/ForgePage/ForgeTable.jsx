import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import ForgeComponentsLeft from "./ForgeComponentsLeft"
import ForgeComponentsRight from "./ForgeComponentsRight"
import ForgeSaberPreview from "./ForgeSaberPreview"

const componentData = await axios.get('/api/forge/components')

const ForgeTable = () => {

    const navigate = useNavigate()

    console.log('componentData.data:', componentData.data)

    const { coloredEmitters, colors, emitters, guards, pommels, soundfonts, switches } = componentData.data

    // state values for client-side saber components
    const [clientEmitter, setClientEmitter] = useState(emitters[1])
    const [clientEmitter2, setClientEmitter2] = useState(emitters[1])
    const [clientColoredEmitter, setClientColoredEmitter] = useState(coloredEmitters[18])
    const [clientColoredEmitter2, setClientColoredEmitter2] = useState(coloredEmitters[18])
    const [clientGuard, setClientGuard] = useState(guards[1])
    const [clientGuard2, setClientGuard2] = useState(guards[1])
    const [clientSwitch, setClientSwitch] = useState(switches[1])
    const [clientSwitch2, setClientSwitch2] = useState(switches[1])
    const [clientPommel, setClientPommel] = useState(pommels[1])
    const [clientColor, setClientColor] = useState(colors[1])
    const [clientSoundfont, setClientSoundfont] = useState(soundfonts[1])
    const [clientBladeStyle, setClientBladeStyle] = useState('Stable')
    const [clientIsDouble, setClientIsDouble] = useState(false)
    const [clientName, setClientName] = useState('Unnamed Saber')

    // state value for single/double blade selection
    // will use conditional rendering depending on forgeMode
    const [forgeMode, setForgeMode] = useState('Single')

    // state value for tracking if saber is turned on
    const [isBladeOn, setIsBladeOn] = useState(false)

    // create saber object from client saber data and add saber to database
    const addSaber = async () => {
        console.log('Saber saved!')

        const savedSaber = {
            isDefault: false,
            name: clientName,
            colorId: clientColor.colorId,
            bladeStyle: clientBladeStyle,
            emitterId: clientEmitter.emitterId,
            coloredEmitterId: clientColoredEmitter.coloredEmitterId,
            guardId: clientGuard.guardId,
            switchId: clientSwitch.switchId,
            pommelId: clientPommel.pommelId,
            isDoubleBladed: clientIsDouble,
            emitter2Id: clientEmitter2.emitterId,
            coloredEmitter2Id: clientColoredEmitter2.coloredEmitterId,
            guard2Id: clientGuard2.guardId,
            switch2Id: clientSwitch2.switchId,
            userId: 2, // change this once user login is implemented
            soundfontId: clientSoundfont.soundfontId,
            isPublic: false // on the fence about even keeping this key
        }

        console.log('savedSaber:', savedSaber)

        await axios.post('/api/forge/add', savedSaber)
    }

    const handleForgeMode = (newMode) => {
        if (newMode === 'Double') {
            setForgeMode('Double')
            setClientIsDouble(true)
            setClientPommel(pommels[1])
            setClientEmitter2(emitters[1])
            setClientGuard2(guards[1])
            setClientSwitch2(switches[1])
        } else if (newMode === 'Single') {
            setForgeMode('Single')
            setClientIsDouble(false)
            setClientPommel(pommels[1])
            setClientEmitter2(emitters[1])
            setClientGuard2(guards[1])
            setClientSwitch2(guards[1])
        }
    }

    const handleBladeToggle = () => {
        // while (isBladeOn) {
        //     new Audio(clientSoundfont.hum).play()
        // }
        console.log(clientSoundfont)
        if (isBladeOn) {
            new Audio(clientSoundfont.deactivate).play()
            setIsBladeOn(false)
        } else {
            new Audio(clientSoundfont.ignite).play()
            new Audio(clientSoundfont.hum).play()
            setIsBladeOn(true)
        }

    }

    const updateColoredEmitter = async (name, color, style) => {
        console.log('Updated colored emitter')
        const updatedColoredEmitter = await axios.post('/api/forge/coloredEmitter', {name: name, color: color, style: style})

        setClientColoredEmitter(updatedColoredEmitter.data)
    }

    const updateColoredEmitter2 = async (name, color, style) => {
        console.log('Updated colored emitter 2')
        const updatedColoredEmitter2 = await axios.post('/api/forge/coloredEmitter', {name: name, color: color, style: style})
        
        setClientColoredEmitter2(updatedColoredEmitter2.data)
    }

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <ForgeComponentsLeft 
                            colors={colors}
                            setClientColor={setClientColor}
                            emitters={emitters}
                            clientEmitter={clientEmitter}
                            clientEmitter2={clientEmitter2}
                            setClientEmitter={setClientEmitter}
                            setClientEmitter2={setClientEmitter2}
                            setClientColoredEmitter={setClientColoredEmitter}
                            setClientColoredEmitter2={setClientColoredEmitter2}
                            guards={guards}
                            setClientGuard={setClientGuard}
                            setClientGuard2={setClientGuard2}
                            switches={switches}
                            setClientSwitch={setClientSwitch}
                            setClientSwitch2={setClientSwitch2}
                            pommels={pommels}
                            setClientPommel={setClientPommel}
                            forgeMode={forgeMode}
                            updateColoredEmitter={updateColoredEmitter}
                            updateColoredEmitter2={updateColoredEmitter2}
                            clientColor={clientColor}
                            clientBladeStyle={clientBladeStyle}
                            setClientBladeStyle={setClientBladeStyle}
                        />
                    </td>
                    <td>
                        <ForgeSaberPreview 
                            clientEmitter={clientEmitter}
                            clientEmitter2={clientEmitter2}
                            clientColoredEmitter={clientColoredEmitter}
                            clientColoredEmitter2={clientColoredEmitter2}
                            clientGuard={clientGuard}
                            clientGuard2={clientGuard2}
                            clientSwitch={clientSwitch}
                            clientSwitch2={clientSwitch2}
                            clientPommel={clientPommel}
                            forgeMode={forgeMode}
                            isBladeOn={isBladeOn}
                        />
                    </td>
                    <td>
                        <ForgeComponentsRight 
                            handleForgeMode={handleForgeMode}
                            colors={colors}
                            clientColor={clientColor}
                            setClientColor={setClientColor}
                            emitters={emitters}
                            clientEmitter={clientEmitter}
                            clientEmitter2={clientEmitter2}
                            setClientEmitter2={setClientEmitter2}
                            setClientColoredEmitter={setClientColoredEmitter}
                            setClientColoredEmitter2={setClientColoredEmitter2}
                            guards={guards}
                            setClientGuard2={setClientGuard2}
                            switches={switches}
                            setClientSwitch2={setClientSwitch2}
                            soundfonts={soundfonts}
                            setClientSoundfont={setClientSoundfont}
                            clientBladeStyle={clientBladeStyle}
                            setClientBladeStyle={setClientBladeStyle}
                            forgeMode={forgeMode}
                            updateColoredEmitter={updateColoredEmitter}
                            updateColoredEmitter2={updateColoredEmitter2}
                        />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
                        <button onClick={() => {
                                // handleBladeToggle()
                                addSaber()
                                navigate('/home')
                            }}>Save</button>
                            <button onClick={() => {
                                // handleBladeToggle()
                                navigate('/home')
                            }}>Discard</button>
                        <button onClick={() => handleBladeToggle()}>Toggle Blade</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default ForgeTable