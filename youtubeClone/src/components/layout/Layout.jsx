import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import {
  ContainerOutlined,
  FireOutlined,
  HomeOutlined,
  VideoCameraFilled,
} from "@ant-design/icons";
import { Menu } from "antd";

const Layout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "2",
      icon: <VideoCameraFilled />,
      label: "Shorts",
    },
    {
      key: "3",
      icon: <ContainerOutlined />,
      label: "Subscriptions",
    },
    {
      key: "4",
      icon: <FireOutlined />,
      label: "Explore",
      children: [
        {
          key: "5",
          label: "Trending",
        },
        {
          key: "6",
          label: "Shopping",
        },
        {
          key: "7",
          label: "Music",
        },
        {
          key: "8",
          label: "Game Info",
        },
      ],
    },
  ];

  return (
    <div className="w-screen h-screen flex flex-col">
      {/* Navbar */}
      <div className="w-full">
        <Navbar setCollapsed={setCollapsed} collapsed={collapsed} />
      </div>

      {/* Main content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-auto">
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["3"]}
            mode="inline"
            theme="dark"
            inlineCollapsed={collapsed}
            items={items}
            onClick={(e) => {
              navigate("/");
            }}
          />
        </div>

        {/* Outlet area */}
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
