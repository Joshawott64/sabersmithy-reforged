import React from "react"

const ForgeComponentsRight = ({handleForgeMode, colors, clientColor, setClientColor, emitters, clientEmitter, clientEmitter2, setClientEmitter2, setClientColoredEmitter, setClientColoredEmitter2, guards, setClientGuard2, switches, setClientSwitch2, soundfonts, setClientSoundfont, clientBladeStyle, setClientBladeStyle, forgeMode, updateColoredEmitter, updateColoredEmitter2}) => {

    const emitterList = emitters.map((el) => <div 
            className="h-20 w-16 content-center self-center hover:bg-gray-300 cursor-pointer"
            onClick={() => {
                setClientEmitter2(el)
                updateColoredEmitter2(el.emitterCode, clientColor.colorCode, clientBladeStyle)
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
            onClick={() => setClientGuard2(el)}
        >
        <img 
            src={el.image} 
            alt={el.guardCode} 
            key={el.guardId}
        />
    </div>)

    const switchList = switches.map((el) => <div 
            className="h-20 w-16 content-center self-center hover:bg-gray-300 cursor-pointer"
            onClick={() => setClientSwitch2(el)}
        >
        <img 
            src={el.image} 
            alt={el.switchCode} 
            key={el.switchId}
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

    const soundfontList = soundfonts.map((el) => <div className="h-20 w-16 content-center self-center hover:bg-gray-300" key={el.soundfontId}>
        <label htmlFor="soundfonts">{el.soundfontCode}</label>
        <img src={el.image} alt={el.soundfontCode}></img>
        <input
        type="radio"
        key={el.soundfontId}
        name="soundfonts"
        onChange={() => setClientSoundfont(el)}
        />
    </div>)

    return (
        <>
            <div className="flex flex-col justify-center px-12 pb-24 space-y-6">
                {forgeMode === 'Double' && <div className="font-bold">
                    <label htmlFor="emitters">Emitters:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md" id="emitters">
                        { emitterList }
                    </div>
                </div>}
                {forgeMode === 'Double' && <div className="font-bold">
                    <label htmlFor="guards">Guards:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md" id="emitters">
                        { guardList }
                    </div>
                </div>}
                {forgeMode === 'Double' && <div className="font-bold">
                    <label htmlFor="switches">Switches:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md" id="emitters">
                        { switchList }
                    </div>
                </div>}
                {forgeMode === 'Single' && <div className="font-bold">
                    <label htmlFor="colors">Colors:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md">
                            { colorList }
                    </div>
                </div>}
                <div className="font-bold">
                    <label htmlFor="soundfonts">Soundfonts:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md" id="soundfonts">
                            { soundfontList }
                    </div>
                </div>
                {forgeMode === 'Single' && <div className="font-bold">
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
                <div className="font-bold">
                    <label htmlFor="num-blades">Number of Blades:</label>
                    <div className="flex flex-row border-4 justify-center border-black rounded-md space-x-4" id="num-blades">
                        <div className="flex flex-col items-center">
                            <label htmlFor="single">Single</label>
                            <input type="radio" id="single" name="num_blades" onChange={() => handleForgeMode('Single')}/>
                        </div>
                        <div className="flex flex-col items-center">
                            <label htmlFor="double">Double</label>
                            <input type="radio" id="double" name="num_blades" onChange={() => handleForgeMode('Double')}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgeComponentsRight