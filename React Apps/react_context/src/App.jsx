import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Layout from './layouts/Layout';
import { HelmetProvider } from 'react-helmet-async';
import WishListProvider from './context/WishListProvider';

function App() {
  return (
    <WishListProvider>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<p>Page not found</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </WishListProvider>
  )
}

export default App
