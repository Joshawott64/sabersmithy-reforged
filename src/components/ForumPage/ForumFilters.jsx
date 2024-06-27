import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const componentData = await axios.get('/api/forge/components')

const ForumFilters = ({setColorFilter, setBladeStyleFilter, setSoundfontFilter, setBladeNumberFilter}) => {

    const { coloredEmitters, colors, emitters, guards, pommels, soundfonts, switches } = componentData.data

    const bladeStyles = ['Stable', 'Unstable']

    const colorList = colors.map((el) => <div key={el.colorId}>
        <label htmlFor="colors">
            <img src={el.image} alt={el.colorCode} />
        </label>
        <input
        type="radio"
        key={el.colorId}
        name="colors"
        onChange={() => setColorFilter(el.colorId)}
        />
    </div>)

    const soundfontList = soundfonts.map((el) => <div key={el.soundfontId}>
        <label htmlFor="soundfonts">
            {el.soundfontCode}
            <img src={el.image} alt={el.soundfontCode} />
        </label>
        <input
        type="radio"
        key={el.soundfontId}
        name="soundfonts"
        onChange={() => setSoundfontFilter(el.soundfontId)}
        />
    </div>)

    const bladeStyleList = bladeStyles.map((el) => <div key={el}>
        <label htmlFor="blade-styles">{el}</label>
        <br />
        <input 
            type="radio"
            key={el}
            name="blade-styles"
            onChange={() => setBladeStyleFilter(el)}
        />
    </div>)

    const handleFilterReset = () => {
        setColorFilter()
        setBladeStyleFilter()
        setSoundfontFilter()
        setBladeNumberFilter()
    }

    return (
        <>
            <div className="flex flex-col items-center space-y-4">
                <h4 className="text-2xl font-bold">Filters:</h4>
                <label htmlFor="colors">Colors:</label>
                <div className="flex flex-row space-x-2 rounded-md bg-gray-300 border-2 border-black">
                    { colorList }
                </div>
                <label htmlFor="soundfonts">Soundfonts:</label>
                <div className="flex flex-row space-x-2 rounded-md bg-gray-300 border-2 border-black">
                    { soundfontList }
                </div>
                <label htmlFor="blade-styles">Blade Styles:</label>
                <div className="flex flex-row space-x-2 rounded-md bg-gray-300 border-2 border-black">
                    { bladeStyleList }
                </div>
                <label htmlFor="blade-number">Number of Blades:</label>
                <div className="flex flex-row space-x-2 rounded-md bg-gray-300 border-2 border-black">
                    <div>
                        <label htmlFor="blade-number">Single</label>
                        <br />
                        <input 
                            type="radio" 
                            key="Single"
                            name="blade-number"
                            onChange={() => setBladeNumberFilter(false)}
                        />
                    </div>
                    <div>
                        <label htmlFor="blade-number">Double</label>
                        <br />
                        <input 
                            type="radio" 
                            key="Double"
                            name="blade-number"
                            onChange={() => setBladeNumberFilter(true)}
                        />
                    </div>
                </div>
                <div>
                    <button className="bg-gray-300 rounded-md border-gray-600 border-2 hover:bg-gray-400" onClick={handleFilterReset}>Reset Filters</button>
                </div>
            </div>
        </>
    )
}

export default ForumFilters