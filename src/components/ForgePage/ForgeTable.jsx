import { useState, useEffect } from "react"
import axios from "axios"
import ForgeComponentsLeft from "./ForgeComponentsLeft"

const ForgeTable = () => {

    const [componentData, setComponentData] = useState([])

    useEffect(() => {
        axios.get('/api/forge/components')
            .then((res) => {
                setComponentData(res.data)
            })
    }, [])

    console.log('componentData:', componentData)

    const { coloredEmitters, colors, emitters, guards, pommels, switches } = componentData

    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <ForgeComponentsLeft 
                            emitters={emitters}
                            guards={guards}
                            switches={switches}
                            pommels={pommels}
                        />
                    </td>
                    <td>Saber Preview</td>
                    <td>More Components</td>
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