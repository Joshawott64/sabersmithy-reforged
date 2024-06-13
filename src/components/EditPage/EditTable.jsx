import { useState, useEffect } from "react"
import axios from "axios"

const componentData = await axios.get('/api/forge/components')

const EditTable = ({state}) => {

    const { saber, urls } = state

    console.log('saber to edit:', saber)

    console.log('urls:', urls)

    

    return (
        <table>
            <tbody>
                <tr>
                    <td>

                    </td>
                    <td>

                    </td>
                    <td>

                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td>

                    </td>
                </tr>
            </tfoot>
        </table>
    )
}

export default EditTable