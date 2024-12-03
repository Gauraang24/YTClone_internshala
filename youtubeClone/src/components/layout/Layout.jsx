import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
    return (
        <div>
            <Navbar />
            This is layout page

            <Outlet />
        </div>
    )
}

export default Layout
