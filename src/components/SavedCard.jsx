import React from 'react'

const SavedCard = ({index, name, colors, savedSchemas, setSavedSchemas, setColors}) => {

  const handleDelete = (index) => {
    const newSavedSchemas = [...savedSchemas]
    newSavedSchemas.splice(index, 1)
    setSavedSchemas(newSavedSchemas)
    localStorage.setItem('savedSchemas', JSON.stringify(newSavedSchemas))
  }

  const handleClick = () => {
    setColors(colors)
  }


  return (
    <>
      <div className='flex flex-col w-36'>
        <div className='flex justify-between gap-x-2 items-center'>
          <p className='text-white text-sm font-bold w-32 p-2'>{name}</p>
          <div className='cursor-pointer' onClick={()=>handleDelete(index)}>
            <svg width="12" height="12" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.47915 2.75C8.47915 2.3703 8.78695 2.0625 9.16665 2.0625H12.8333C13.213 2.0625 13.5208 2.3703 13.5208 2.75V3.4375H17.4166C17.7963 3.4375 18.1041 3.7453 18.1041 4.125C18.1041 4.5047 17.7963 4.8125 17.4166 4.8125H4.58331C4.20362 4.8125 3.89581 4.5047 3.89581 4.125C3.89581 3.7453 4.20362 3.4375 4.58331 3.4375H8.47915V2.75Z" fill="white" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.71988 7.28272C5.74567 7.0506 5.94187 6.875 6.17541 6.875H15.8245C16.0581 6.875 16.2543 7.0506 16.2801 7.28272L16.4635 8.93395C16.7942 11.9103 16.7942 14.9142 16.4635 17.8906L16.4455 18.0532C16.325 19.1372 15.4849 20.0016 14.4047 20.1528C12.1459 20.469 9.85405 20.469 7.59524 20.1528C6.51507 20.0016 5.67492 19.1372 5.55448 18.0532L5.53641 17.8906C5.2057 14.9142 5.2057 11.9103 5.53641 8.93395L5.71988 7.28272ZM9.85415 10.45C9.85415 10.0703 9.54634 9.76249 9.16665 9.76249C8.78695 9.76249 8.47915 10.0703 8.47915 10.45V16.8667C8.47915 17.2464 8.78695 17.5542 9.16665 17.5542C9.54634 17.5542 9.85415 17.2464 9.85415 16.8667L9.85415 10.45ZM13.5208 10.45C13.5208 10.0703 13.213 9.76249 12.8333 9.76249C12.4536 9.76249 12.1458 10.0703 12.1458 10.45V16.8667C12.1458 17.2464 12.4536 17.5542 12.8333 17.5542C13.213 17.5542 13.5208 17.2464 13.5208 16.8667V10.45Z" fill="white" />
            </svg>
          </div>
        </div>
        <div className='flex justify-center items-center gap-x-2 bg-[#151515] p-2 rounded-md cursor-pointer' onClick={handleClick}>
          {Array.from(colors).map((color, index) => (
            <div
              key={index}
              className='w-4 h-4 rounded-full'
              style={{ backgroundColor: color }}
            >
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SavedCard