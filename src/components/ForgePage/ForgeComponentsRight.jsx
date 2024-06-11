const ForgeComponentsRight = ({colors, setClientColor}) => {

    const colorList = colors.map((el) => <img 
        src={el.image}
        alt={el.colorCode}
        key={el.colorId}
        onClick={() => setClientColor(el)}
    />)

    return (
        <ul>
            <li>
                { colorList }
            </li>
            <li>
                Soundfonts go here
            </li>
            <li>
                Blade Styles go here
            </li>
        </ul>
    )
}

export default ForgeComponentsRight