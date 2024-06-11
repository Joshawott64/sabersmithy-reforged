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
    const [clientGuard, setClientGuard] = useState(guards[1])
    const [clientSwitch, setClientSwitch] = useState(switches[1])
    const [clientPommel, setClientPommel] = useState(pommels[1])
    const [clientColor, setClientColor] = useState(colors[1])
    const [clientName, setClientName] = useState('Unnamed Saber')

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <ForgeComponentsLeft 
                            emitters={emitters}
                            setClientEmitter={setClientEmitter}
                            guards={guards}
                            setClientGuard={setClientGuard}
                            switches={switches}
                            setClientSwitch={setClientSwitch}
                            pommels={pommels}
                            setClientPommel={setClientPommel}
                        />
                    </td>
                    <td>
                        <ForgeSaberPreview 
                            clientEmitter={clientEmitter}
                            clientGuard={clientGuard}
                            clientSwitch={clientSwitch}
                            clientPommel={clientPommel}
                        />
                    </td>
                    <td>
                        <ForgeComponentsRight 
                            colors={colors}
                            setClientColor={setClientColor}
                        />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>
                        <button>Save</button>
                        <button>Toggle Blade</button>
                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default ForgeTable