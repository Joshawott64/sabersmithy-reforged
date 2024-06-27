const EditComponentsLeft = ({colors, setClientColor, emitters, clientEmitter, clientEmitter2, setClientEmitter, setClientEmitter2, setClientColoredEmitter, setClientColoredEmitter2, guards, setClientGuard, switches, setClientSwitch, pommels, setClientPommel, editMode, updateColoredEmitter, updateColoredEmitter2, clientColor, clientBladeStyle, setClientBladeStyle}) => {

    const emitterList = emitters.map((el) => <div 
            className="h-20 w-16 content-center self-center hover:bg-gray-300 cursor-pointer"
            onClick={() => {
                setClientEmitter(el)
                updateColoredEmitter(el.emitterCode, clientColor.colorCode, clientBladeStyle)
                }
            }
        >
        <img 
            src={el.image} 
            alt={el.emitterCode}
            key={el.emitterId}
            
        />
    </div>)

    const guardList = guards.map((el) => <div
            className="h-20 w-16 content-center self-center hover:bg-gray-300 cursor-pointer"
            onClick={() => setClientGuard(el)}
        >
        <img 
            src={el.image} 
            alt={el.guardCode} 
            key={el.guardId}
        />
    </div>)

    const switchList = switches.map((el) => <div 
            className="h-20 w-16 content-center self-center hover:bg-gray-300 cursor-pointer"
            onClick={() => setClientSwitch(el)}
        >
        <img 
            src={el.image} 
            alt={el.switchCode} 
            key={el.switchId}
        />
    </div>)

    const pommelList = pommels.map((el) => <div 
            className="h-20 w-16 content-center self-center hover:bg-gray-300 cursor-pointer"
            onClick={() => setClientPommel(el)}
        >
        <img 
            src={el.image} 
            alt={el.pommelCode} 
            key={el.pommelId}
        />
    </div>)

    const colorList = colors.map((el) => <div 
            className="h-20 w-16 content-center self-center hover:bg-gray-300 cursor-pointer"
            onClick={() => {
            setClientColor(el)
                updateColoredEmitter(clientEmitter.emitterCode, el.colorCode, clientBladeStyle)
                updateColoredEmitter2(clientEmitter2.emitterCode, el.colorCode, clientBladeStyle)
                }
            }
        >
        <img 
        src={el.image}
        alt={el.colorCode}
        key={el.colorId}
        />
    </div>)

    return (
        <>
            <div className="flex flex-col justify-center px-12  pb-24 space-y-6">
                <div className="font-bold">
                    <label htmlFor="emitters">Emitters:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md" id="emitters">
                        { emitterList }
                    </div>
                </div>
                <div className="font-bold">
                    <label htmlFor="guards">Guards:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md">
                        { guardList }
                    </div>
                </div>
                <div className="font-bold">
                    <label htmlFor="switches">Switches:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md">
                        { switchList }
                    </div>
                </div>
                {editMode === 'Single' && <div className="font-bold">
                    <label htmlFor="pommels">Pommels:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md">
                        { pommelList }
                    </div>
                </div>}
                {editMode === 'Double' && <div className="font-bold">
                    <label htmlFor="colors">Colors:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md">
                            { colorList }
                    </div>
                </div>}
                {editMode === 'Double' && <div className="font-bold">
                    <label htmlFor="blade-styles">Blade Styles:</label>
                    <div id="blade-styles" className="flex flex-row border-4 justify-center border-black rounded-md space-x-4">
                        <button className="hover:bg-gray-300" onClick={() => {
                                setClientBladeStyle('Stable')
                                updateColoredEmitter(clientEmitter.emitterCode, clientColor.colorCode, 'Stable')
                                updateColoredEmitter2(clientEmitter2.emitterCode, clientColor.colorCode, 'Stable')
                            }}>Stable</button>

                            <button className="hover:bg-gray-300" onClick={() => {
                                setClientBladeStyle('Unstable')
                                updateColoredEmitter(clientEmitter.emitterCode, clientColor.colorCode, 'Unstable')
                                updateColoredEmitter2(clientEmitter2.emitterCode, clientColor.colorCode, 'Unstable')
                            }}>Unstable</button>
                    </div>
                </div>}
            </div>
        </>
    )
}

export default EditComponentsLeft