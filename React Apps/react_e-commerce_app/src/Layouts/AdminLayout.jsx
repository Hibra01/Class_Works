import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavbar from '../components/Navbar/AdminNavbar/AdminNavbar'

export default function AdminLayout() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    )
}
