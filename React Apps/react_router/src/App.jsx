import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import NoPage from './pages/NoPage'
import Products from './pages/Products'
import Details from './pages/Details'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="products" element={<Products />} />
            <Route path='details/:id' element={<Details />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
