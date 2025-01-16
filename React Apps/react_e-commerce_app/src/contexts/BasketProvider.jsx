import React, { createContext, useState } from 'react'
import useLocalStorage from '../custom_hooks/useLocalStorage'

export const BasketContext = createContext()

export default function BasketProvider({ children }) {
    const [basket, setBasket] = useLocalStorage("Basket", [])

    const addToBasket = (product) => {
        const existingProduct = basket.find((p) => p._id === product._id)

        if (existingProduct) {
            setBasket((prevBasket) =>
                prevBasket.map((p) =>
                    p._id === product._id ? { ...p, count: p.count + 1 } : p
                )
            )
        } else {
            setBasket((prevBasket) => [...prevBasket, { ...product, count: 1 }])
        }
    }

    const decreaseBasket = (product) => {
        product.count === 1 ?
            removeFromBasket(product) :
            setBasket((prevBasket) =>
                prevBasket.map((p) =>
                    p._id === product._id ? { ...p, count: p.count - 1 } : p
                )
            )
    }

    const removeFromBasket = (product) => {
        setBasket((prevBasket) => prevBasket.filter((p) => p._id !== product._id))
    }

    const clearBasket = () => {
        setBasket([])
    }

    return (
        <BasketContext.Provider value={{ basket, addToBasket, decreaseBasket, removeFromBasket, clearBasket }}>
            {children}
        </BasketContext.Provider>
    )
}
