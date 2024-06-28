import React, { useEffect } from 'react'
import { CompactPicker } from 'react-color'

const Picker = ({colorSelected, setColorSelected, colors, setColors, index}) => {

    const handleColorChange = (newColor) => {
        setColorSelected(newColor.hex)     
    }

    useEffect(() => {
        const newColors = [...colors]
        newColors[index] = colorSelected
        setColors(newColors)
    }, [colorSelected])

    return (
        <CompactPicker color={colorSelected} onChangeComplete={(hex)=> handleColorChange(hex)} />
    )
}

export default Picker