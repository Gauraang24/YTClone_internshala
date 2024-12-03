import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            This is layout page

            <Outlet />
        </div>
    )
}

export default Layout
