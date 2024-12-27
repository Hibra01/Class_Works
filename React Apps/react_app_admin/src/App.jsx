import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import UserLayout from './layout/UserLayout'
import AdminLayout from './layout/AdminLayout'
import Products from './pages/Products/Products'
import About from './pages/About/About'
import ProductList from './pages/AdminPages/ProductList/ProductList'
import UpdatePage from './pages/AdminPages/UpdatePage/UpdatePage'
import AddPage from './pages/AdminPages/AddPage/AddPage'
import Details from './pages/Details/Details'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Products />} />
          <Route path="about" element={<About />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="*" element={<><h1>Error 404</h1></>} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<ProductList />} />
          <Route path="add" element={<AddPage />} />
          <Route path="update/:id" element={<UpdatePage />} />
          <Route path="*" element={<><h1>Error 404</h1></>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
