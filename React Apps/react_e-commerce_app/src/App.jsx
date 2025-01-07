import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import MainLayout from './Layouts/MainLayout';
import AdminLayout from './Layouts/AdminLayout';
import TablePage from './pages/AdminTablePage/TablePage';
import { HelmetProvider } from 'react-helmet-async';
import DetailPage from './pages/DetailPage/DetailPage';
import AddPage from './pages/AddPage/AddPage';
import UpdatePage from './pages/UpdatePage/UpdatePage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="detail/:id" element={<DetailPage />} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<TablePage />} />
            <Route path="addPage" element={<AddPage />} />
            <Route path="updatePage/:id" element={<UpdatePage />} />
          </Route>
          <Route path="*" element={<p>Page not found</p>} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
