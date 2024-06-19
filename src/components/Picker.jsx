import React from 'react'
import { CompactPicker } from 'react-color'

const Picker = ({colorSelected, setColorSelected}) => {

    const handleColorChange = (newColor) => {
        setColorSelected(newColor.hex)
    }

    return (
        <CompactPicker color={colorSelected} onChangeComplete={(hex)=> handleColorChange(hex)} />
    )
}

export default Picker