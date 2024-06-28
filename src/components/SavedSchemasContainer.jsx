import React, { useEffect, useState } from 'react'
import SavedCard from './SavedCard'

const SavedSchemasContainer = ({ savedSchemas, setSavedSchemas, setColors }) => {

    useEffect(() => {
        setSavedSchemas(JSON.parse(localStorage.getItem('savedSchemas')) || [])
    }, [])

    return (
        savedSchemas.length ? (
            <div className='grid grid-cols-4 gap-4'>
                {savedSchemas.map((schema, index) => (
                    <SavedCard key={index} index={index} name={schema[0]} colors={schema[1]} savedSchemas={savedSchemas} setSavedSchemas={setSavedSchemas} setColors={setColors} />
                ))}
            </div>
        ) : ''
    )
}

export default SavedSchemasContainer