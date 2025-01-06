import React, { useState } from 'react'
import useLocalStorage from './useLocalStorage'

const useTodoHook = () => {
    const [todos, setTodos] = useLocalStorage("todos", [])
    const [inp, setInp] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setTodos([...todos, { id: Date.now(), title: inp }])
        setInp("")
    }

    return [todos, inp, setInp, handleSubmit]
}

export default useTodoHook
