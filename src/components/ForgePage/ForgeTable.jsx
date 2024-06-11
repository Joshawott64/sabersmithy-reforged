import { useState, useEffect } from "react"
import axios from "axios"
import ForgeComponentsLeft from "./ForgeComponentsLeft"
import ForgeComponentsRight from "./ForgeComponentsRight"
import ForgeSaberPreview from "./ForgeSaberPreview"

const componentData = await axios.get('/api/forge/components')

const ForgeTable = () => {

    console.log('componentData.data:', componentData.data)

    const { coloredEmitters, colors, emitters, guards, pommels, switches } = componentData.data

    // state values for client-side saber components
    const [clientEmitter, setClientEmitter] = useState(emitters[1])
    const [clientEmitter2, setClientEmitter2] = useState(emitters[1])
    const [clientGuard, setClientGuard] = useState(guards[1])
    const [clientGuard2, setClientGuard2] = useState(guards[1])
    const [clientSwitch, setClientSwitch] = useState(switches[1])
    const [clientSwitch2, setClientSwitch2] = useState(switches[1])
    const [clientPommel, setClientPommel] = useState(pommels[1])
    const [clientColor, setClientColor] = useState(colors[1])
    const [clientBladeStyle, setClientBladeStyle] = useState('Stable')
    const [clientIsDouble, setClientIsDouble] = useState(false)
    const [clientName, setClientName] = useState('Unnamed Saber')

    // state value for single/double blade selection
    // will use conditional rendering depending on forgeMode
    const [forgeMode, setForgeMode] = useState('Single')

    // create saber object from client saber data and add saber to database
    const addSaber = async () => {
        console.log('Saber saved!')

        const savedSaber = {
            isDefault: false,
            name: clientName,
            colorId: clientColor.colorId,
            bladeStyle: clientBladeStyle, // change this once bladestyles are changable
            emitterId: clientEmitter.emitterId,
            coloredEmitterId: 1, // change this once colored emitters can be dynamically selected
            guardId: clientGuard.guardId,
            switchId: clientSwitch.switchId,
            pommelId: clientPommel.pommelId,
            isDoubleBladed: clientIsDouble, // change this once double sabers are implemented
            emitter2Id: clientEmitter2.emitterId,
            coloredEmitter2Id: 1,
            guard2Id: clientGuard2.guardId,
            switch2Id: clientSwitch2.switchId,
            userId: 2, // change this once user login is implemented
            soundfontId: clientColor.colorId, // coded to select sound based on color (will change once soundfont selection is implemented)
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

    console.log('forgeMode:', forgeMode)

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <ForgeComponentsLeft 
                            colors={colors}
                            setClientColor={setClientColor}
                            emitters={emitters}
                            setClientEmitter={setClientEmitter}
                            setClientEmitter2={setClientEmitter2}
                            guards={guards}
                            setClientGuard={setClientGuard}
                            setClientGuard2={setClientGuard2}
                            switches={switches}
                            setClientSwitch={setClientSwitch}
                            setClientSwitch2={setClientSwitch2}
                            pommels={pommels}
                            setClientPommel={setClientPommel}
                            forgeMode={forgeMode}
                        />
                    </td>
                    <td>
                        <ForgeSaberPreview 
                            clientEmitter={clientEmitter}
                            clientEmitter2={clientEmitter2}
                            clientGuard={clientGuard}
                            clientGuard2={clientGuard2}
                            clientSwitch={clientSwitch}
                            clientSwitch2={clientSwitch2}
                            clientPommel={clientPommel}
                            forgeMode={forgeMode}
                        />
                    </td>
                    <td>
                        <ForgeComponentsRight 
                            handleForgeMode={handleForgeMode}
                            colors={colors}
                            setClientColor={setClientColor}
                            emitters={emitters}
                            setClientEmitter2={setClientEmitter2}
                            guards={guards}
                            setClientGuard2={setClientGuard2}
                            switches={switches}
                            setClientSwitch2={setClientSwitch2}
                            forgeMode={forgeMode}
                        />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <input type="text" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
                        <button onClick={addSaber}>Save</button>
                        <button>Toggle Blade</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default ForgeTable