import React, { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const componentData = await axios.get('/api/forge/components')

const ForumFilters = ({setColorFilter, setBladeStyleFilter, setSoundfontFilter, setBladeNumberFilter}) => {

    const { coloredEmitters, colors, emitters, guards, pommels, soundfonts, switches } = componentData.data

    const bladeStyles = ['Stable', 'Unstable']

    const colorList = colors.map((el) => <React.Fragment key={el.colorId}>
        <input
        type="radio"
        key={el.colorId}
        name="colors"
        onChange={() => setColorFilter(el.colorId)}
        />
        <label htmlFor="colors">
            <img src={el.image} alt={el.colorCode} />
        </label>
    </React.Fragment>)

    const soundfontList = soundfonts.map((el) => <React.Fragment key={el.soundfontId}>
        <input
        type="radio"
        key={el.soundfontId}
        name="soundfonts"
        onChange={() => setSoundfontFilter(el.soundfontId)}
        />
        <label htmlFor="soundfonts">{el.soundfontCode}</label>
    </React.Fragment>)

    const bladeStyleList = bladeStyles.map((el) => <React.Fragment key={el}>
        <input 
            type="radio"
            key={el}
            name="blade-styles"
            onChange={() => setBladeStyleFilter(el)}
        />
        <label htmlFor="blade-styles">{el}</label>
    </React.Fragment>)

    const handleFilterReset = () => {
        setColorFilter()
        setBladeStyleFilter()
        setSoundfontFilter()
        setBladeNumberFilter()
    }

    return (
        <>
            <div>
                <h4>Filters:</h4>
                <label htmlFor="colors">Colors:</label>
                { colorList }
                <br />
                <label htmlFor="soundfonts">Soundfonts:</label>
                { soundfontList }
                <br />
                <label htmlFor="blade-styles">Blade Styles:</label>
                { bladeStyleList }
                <br />
                <label htmlFor="blade-number">Number of Blades:</label>
                <input 
                    type="radio" 
                    key="Single"
                    name="blade-number"
                    onChange={() => setBladeNumberFilter(false)}
                />
                <label htmlFor="blade-number">Single</label>
                <input 
                    type="radio" 
                    key="Double"
                    name="blade-number"
                    onChange={() => setBladeNumberFilter(true)}
                />
                <label htmlFor="blade-number">Double</label>
                <br />
                <button onClick={handleFilterReset}>Reset Filters</button>
            </div>
        </>
    )
}

export default ForumFilters