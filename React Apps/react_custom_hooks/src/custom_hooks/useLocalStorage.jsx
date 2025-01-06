import React, { useEffect, useState } from 'react'

const useLocalStorage = (dataName, defaultValue) => {
    const [value, setValue] = useState(localStorage.getItem(dataName) ? JSON.parse(localStorage.getItem(dataName)) : defaultValue)

    useEffect(() => {
        localStorage.setItem(dataName, JSON.stringify(value))
    }, [value, dataName])
    

  return [value, setValue]
}

export default useLocalStorage
