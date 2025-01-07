import axios from "axios"

export const getData = (setProducts, setLoading) => {
    axios('https://6769264ccbf3d7cefd39c513.mockapi.io/products')
        .then((res) => {
            setProducts(res.data)
            setLoading(false)
        })
}