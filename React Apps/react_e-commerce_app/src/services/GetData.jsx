import axios from "axios"
import link from "./link.js"

// https://6769264ccbf3d7cefd39c513.mockapi.io/products/

export const getData = (setProducts, setLoading) => {
    axios(link)
        .then((res) => {
            setProducts(res.data)
            setLoading(false)
        })
}

export const getDataById = (setObj, setLoading, id) => {
    axios(`${link}/${id}`)
        .then((res) => {
            setObj(res.data)
            setLoading(false)
        })
}