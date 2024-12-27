import React from 'react'
import AdminNavbar from '../components/Navbar/AdminNavbar/AdminNavbar'
import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div>
      <AdminNavbar />
      <Outlet />
    </div>
  )
}
