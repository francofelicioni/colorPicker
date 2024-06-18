import React, { useState } from 'react'
import CircleColor from './CircleColor'

const SelectorContainer = ({ colorSelected }) => {
  const [colors, setColors] = useState(Array(5).fill(''))

  const handleColorChange = (index, newColor) => {
    const updatedColors = [...colors]
    updatedColors[index] = newColor
    setColors(updatedColors)
  }

  return (
    <div className='flex justify-center items-center gap-x-8 py-4'>
      {colors.map((color, index) => (
        <CircleColor
          colorSelected={color}
          key={index}
          onColorChange={(newColor) => handleColorChange(index, newColor)}
        />
      ))}
    </div>
  )
}

export default SelectorContainer
