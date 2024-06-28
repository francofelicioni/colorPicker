import React, { useState } from 'react'

const NameInput = ({colors, setColors, setActiveIndex, savedSchemas, setSavedSchemas}) => {

  const [name, setName] = useState('')

  const handleClick = () => {
    if (name === '') {
      console.log('Please enter a name')
      return
    }

    if (colors.some(color => color === '')) {
      console.log('Please pick a color for each palette')
      return
    }

    let savedSchemas = JSON.parse(localStorage.getItem('savedSchemas')) || [];
    savedSchemas.push([name, colors]);
    setSavedSchemas(savedSchemas)
    localStorage.setItem('savedSchemas', JSON.stringify(savedSchemas));
    setColors(Array(5).fill(''))
    setActiveIndex(null)
    setName('')
  }

  return (
    <div className='space-y-4'>
      <p className='text-white font-bold'>Name:</p>
      <div className='flex gap-x-2'>
        <input type="text" className='bg-black text-white border border-white rounded px-2 py-1' placeholder='Add a schema name' value={name} onChange={(e) => setName(e.target.value)} />
        <div className='cursor-pointer' onClick={handleClick}>
          <svg width="67" height="42" viewBox="0 0 67 42" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="63" height="38" rx="7" fill="white" stroke="white" stroke-width="4" />
            <line x1="35.6" y1="10" x2="35.6" y2="31" stroke="#2C2C2C" stroke-width="3" />
            <line x1="46" y1="20.6" x2="25" y2="20.6" stroke="#2C2C2C" stroke-width="3" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default NameInput