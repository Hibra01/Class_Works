import React from 'react'
import Navbar from '../components/Navbar/UserNavbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function UserLayout() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}
