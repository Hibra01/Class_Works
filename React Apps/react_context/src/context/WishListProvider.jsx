import React, { createContext, useState } from 'react'



export const WishListContext = createContext()

function WishListProvider({ children }) {
    const [wishs, setWishs] = useState([])

    function addToWishList(obj) {
        console.log(obj)
        setWishs(...wishs, obj)
    }
    return (
        <WishListContext.Provider value={{wishs, addToWishList}}>
            {children}
        </WishListContext.Provider>
    )
}

export default WishListProvider
