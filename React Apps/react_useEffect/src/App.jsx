import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [products, setProducts] = useState([])
  const [inp, setInp] = useState([])


  function getData() {
    fetch("https://northwind.vercel.app/api/categories")
    .then((res) => res.json())
    .then((data) => setProducts(data))
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <form onSubmit={(e) => setProducts()}>
        <div className="mb-3">
          <input type="text" value={inp} className="form-control" id="exampleInputPassword1" onChange={(e) => setInp(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      <ul>{products.map((a) => <li key={a.id}>{a.description}</li>)}</ul>
    </>
  )
}

export default App
