import React, { useState } from 'react'
import {
    MenuFoldOutlined,
    MenuOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Avatar, Button } from 'antd';
import { Input } from 'antd';
const { Search } = Input;
const Navbar = ({ collapsed, setCollapsed }) => {
    // const [collapsed, setCollapsed] = useState(false)

    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }

    return (
        <div className='flex items-center  w-full'>

            <div className='flex items-center  w-1/3'>
                <Button
                    className='!bg-transparent rounded-full w-12 h-12 border-none  hover:!bg-gray-600'
                    onClick={toggleCollapsed}
                    style={{

                    }}
                >
                    <MenuOutlined style={{
                        color: "aliceblue"
                    }} />
                </Button>

                <img src="/images/youtubeLogoDark.jpg" alt="Youtube Logo" width={200} />
            </div>

            <Search
                placeholder="input search text"
                className='header-searchBar w-1/3 '
                onSearch={() => {

                }}

            />

            <div className='w-1/3 text-right'>
                <Avatar icon={"A"} className='bg-white text-black' />
            </div>

        </div>
    )
}

export default Navbar
