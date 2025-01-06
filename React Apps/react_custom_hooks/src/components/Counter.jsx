import React from 'react'
import useCounterHook from '../custom_hooks/useCounterHook'

export default function Counter() {
    const [count, inc, dec] = useCounterHook()

    return (
        <>
            <div>{count}</div>
            <button onClick={() => dec()}>-</button>
            <button onClick={() => inc()}>+</button>
        </>
    )
}
