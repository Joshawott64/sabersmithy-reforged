import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import EditSaberPreview from "./EditSaberPreview"
import EditComponentsLeft from "./EditComponentsLeft"
import EditComponentsRight from "./EditComponentsRight"

const componentData = await axios.get('/api/forge/components')

const EditTable = ({state}) => {

    const navigate = useNavigate()

    const { saber, urls } = state

    const { coloredEmitters, colors, emitters, guards, pommels, soundfonts, switches } = componentData.data

    console.log('componentData.data:', componentData.data)

    console.log('saber to edit:', saber)

    // console.log('urls:', urls)

    // state values for client-side saber components
    const [clientEmitter, setClientEmitter] = useState(emitters[saber.emitterId - 1])
    const [clientEmitter2, setClientEmitter2] = useState(emitters[saber.emitter2Id - 1])
    const [clientColoredEmitter, setClientColoredEmitter] = useState(coloredEmitters[saber.coloredEmitterId - 1])
    const [clientColoredEmitter2, setClientColoredEmitter2] = useState(coloredEmitters[saber.coloredEmitter2Id - 1])
    const [clientGuard, setClientGuard] = useState(guards[saber.guardId - 1])
    const [clientGuard2, setClientGuard2] = useState(guards[saber.guard2Id - 1])
    const [clientSwitch, setClientSwitch] = useState(switches[saber.switchId - 1])
    const [clientSwitch2, setClientSwitch2] = useState(switches[saber.switch2Id - 1])
    const [clientPommel, setClientPommel] = useState(pommels[saber.pommelId - 1])
    const [clientColor, setClientColor] = useState(colors[saber.colorId - 1])
    const [clientSoundfont, setClientSoundfont] = useState(soundfonts[saber.soundfontId - 1])
    const [clientBladeStyle, setClientBladeStyle] = useState(saber.bladeStyle)
    const [clientIsDouble, setClientIsDouble] = useState(saber.isDoubleBladed)
    const [clientName, setClientName] = useState(saber.name)

    // state value for single/double blade selection
    // will use conditional rendering depending on editMode
    const [editMode, setEditMode] = useState('')

    useEffect(() => {
        if (saber.isDoubleBladed) {
            setEditMode('Double')
        } else {
            setEditMode('Single')
        }
    }, [])

    const handleEditMode = (newMode) => {
        if (newMode === 'Double') {
            setEditMode('Double')
            setClientIsDouble(true)
            setClientPommel(pommels[1])
            setClientEmitter2(emitters[1])
            setClientGuard2(guards[1])
            setClientSwitch2(switches[1])
        } else if (newMode === 'Single') {
            setEditMode('Single')
            setClientIsDouble(false)
            setClientPommel(pommels[1])
            setClientEmitter2(emitters[1])
            setClientGuard2(guards[1])
            setClientSwitch2(guards[1])
        }
    }

    console.log('editMode:', editMode)

    // state value for tracking if saber is turned on
    const [isBladeOn, setIsBladeOn] = useState(false)

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

    const saveChanges = async () => {
        console.log('Saved changes')

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
            userId: saber.userId,
            soundfontId: clientSoundfont.soundfontId,
            isPublic: false // on the fence about even keeping this key
        }

        console.log('savedSaber:', savedSaber)

        await axios.put(`/api/edit/${saber.saberId}`, savedSaber)
    }

    return (
        <>
            <div className="flex flex-row justify-between bg-zinc-100 border-4 border-black h-full w-full">
                <div className="flex-wrap" id="components-left ">
                    <EditComponentsLeft 
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
                        editMode={editMode}
                        updateColoredEmitter={updateColoredEmitter}
                        updateColoredEmitter2={updateColoredEmitter2}
                        clientColor={clientColor}
                        clientBladeStyle={clientBladeStyle}
                        setClientBladeStyle={setClientBladeStyle}
                    />
                </div>
                <div className="content-end" id="preview-image">
                    <EditSaberPreview 
                        clientEmitter={clientEmitter}
                        clientEmitter2={clientEmitter2}
                        clientColoredEmitter={clientColoredEmitter}
                        clientColoredEmitter2={clientColoredEmitter2}
                        clientGuard={clientGuard}
                        clientGuard2={clientGuard2}
                        clientSwitch={clientSwitch}
                        clientSwitch2={clientSwitch2}
                        clientPommel={clientPommel}
                        editMode={editMode}
                        isBladeOn={isBladeOn}
                    />
                </div>
                <div className="flex-wrap" id="components-right">
                    <EditComponentsRight 
                        handleEditMode={handleEditMode}
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
                        editMode={editMode}
                        updateColoredEmitter={updateColoredEmitter}
                        updateColoredEmitter2={updateColoredEmitter2}
                    />
                </div>
            </div>
            <div id="footer" className="flex flex-row space-x-4">
                <input className="text-center border-2 border-gray-600 rounded-md items-center" type="text" value={clientName} onChange={(e) => setClientName(e.target.value)}/>
                {isBladeOn === false && <button className="border-2 border-slate-600 rounded-sm bg-white w-max h-1/6 text-slate-800" onClick={() => {
                    saveChanges()
                    navigate('/gallery')
                }}>Save Changes</button>}
                {isBladeOn && <button className="border-2 border-slate-400 rounded-sm bg-slate-200 w-max h-1/6 text-slate-400 cursor-not-allowed" disabled>Save Changes</button>}
                {isBladeOn && <audio loop autoPlay hidden>
                    <source src={clientSoundfont.hum} />
                </audio>}
                {isBladeOn === false && <button className="border-2 border-slate-600 rounded-sm bg-white w-max h-1/6 text-slate-800" onClick={() => {
                    navigate('/gallery')
                }}>Discard Changes</button>}
                {isBladeOn && <button className="border-2 border-slate-400 rounded-sm bg-slate-200 w-max h-1/6 text-slate-400 cursor-not-allowed" disabled>Discard Changes</button>}
                <button className="border-2 border-slate-600 rounded-sm bg-white w-max h-1/6 text-slate-800" onClick={() => handleBladeToggle()}>Toggle Blade</button>
            </div>
        </>
    )
}

export default EditTable