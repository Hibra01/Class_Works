import React, { useState } from 'react'
import useLocalStorage from '../custom_hooks/useLocalStorage'
import useTodoHook from '../custom_hooks/useTodoHook'

export default function TodoItem() {
    const [todos, inp, setInp, handleSubmit] = useTodoHook()

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={inp} onChange={(e) => setInp(e.target.value)} type="text" />
                <button>ADD</button>
            </form>

            <ul>
                {
                    todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
                }
            </ul>
        </>
    )
}
