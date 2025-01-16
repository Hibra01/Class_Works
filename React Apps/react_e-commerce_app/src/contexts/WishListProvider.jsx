import React, { createContext, useState } from 'react'
import useLocalStorage from '../custom_hooks/useLocalStorage'

export const WishListContext = createContext()

export default function WishListProvider({ children }) {
  const [wishList, setWishList] = useLocalStorage("WishList", [])

  const addToWishList = (product) => {
    wishList.find((p) => p._id === product._id) ?
      setWishList((prevBasket) => prevBasket.filter((p) => p._id !== product._id))
      : setWishList((prevList) => [...prevList, product])
  }

  return (
    <WishListContext.Provider value={{ wishList, setWishList, addToWishList }}>
      {children}
    </WishListContext.Provider>
  )
}
