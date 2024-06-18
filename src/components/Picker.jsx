import React from 'react'
import { CompactPicker } from 'react-color'

const Picker = ({colorSelected, setColorSelected}) => {

    return (
        <CompactPicker color={colorSelected} onChangeComplete={(hex)=> setColorSelected(hex)} />
    )
}

export default Picker