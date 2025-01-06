import React from 'react'
import { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useCounterHook = () => {
    const [count, setCount] = useLocalStorage("count", 0)


    function inc(){
        setCount(count + 1)
    }

    function dec(){
        setCount(count - 1)
    }
  return [count, inc, dec]
}

export default useCounterHook
