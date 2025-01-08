import React, { createContext, useState } from 'react'

export const BasketContext = createContext()

export default function BasketProvider({ children }) {
    const [basket, setBasket] = useState([])

    const addToBasket = (product) => {
        const existingProduct = basket.find((p) => p.id === product.id)

        if (existingProduct) {
            setBasket((prevBasket) =>
                prevBasket.map((p) =>
                    p.id === product.id ? { ...p, count: p.count + 1 } : p
                )
            )
        } else {
            setBasket((prevBasket) => [...prevBasket, { ...product, count: 1 }])
        }
    }

    const removeFromBasket = (productId) => {
        setBasket((prevBasket) => prevBasket.filter(product => product.id !== productId))
    }

    const clearBasket = () => {
        setBasket([])
    }

    return (
        <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, clearBasket }}>
            {children}
        </BasketContext.Provider>
    )
}
