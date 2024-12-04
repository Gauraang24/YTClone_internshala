import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import { ContainerOutlined, FireOutlined, HomeOutlined, VideoCameraFilled } from '@ant-design/icons'
import { Menu } from 'antd'

const Layout = () => {
    const [collapsed, setCollapsed] = useState(false)

    const items = [
        {
            key: '1',
            icon: <HomeOutlined />,
            label: 'Home',
        },
        {
            key: '2',
            icon: <VideoCameraFilled />,
            label: 'Shorts',
        },
        {
            key: '3',
            icon: <ContainerOutlined />,
            label: 'Subscriptions',
        },
        {
            key: '3',
            icon: <FireOutlined />,
            label: 'Explore',
            children: [
                {
                    key: '5',
                    label: 'Trending',
                },
                {
                    key: '6',
                    label: 'Shopping',
                },
                {
                    key: '7',
                    label: 'Music',
                },
                {
                    key: '8',
                    label: 'Gaminf',
                },
            ],
        },
    ]
    return (
        <div className='w-screen h-screen overflow-hidden flex flex-col'>
            <div className=' w-full px-4'>
                <Navbar setCollapsed={setCollapsed} collapsed={collapsed} />
            </div>
            <div className=' flex w-full grow'>
                <div className='w-auto '>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['3']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={collapsed}
                        items={items}
                        onClick={(e) => {
                            console.log("E onclick", e)
                        }}
                    />
                </div>
                <div className='flex-1 border-red-500 border-2'>

                    <Outlet />
                </div>
            </div>

        </div>
    )
}

export default Layout
