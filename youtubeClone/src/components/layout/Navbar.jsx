import React from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Input } from "antd";
import CustomButton from "../CustomComponent/CustomButton";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
const Navbar = ({ collapsed, setCollapsed }) => {
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    const navigate = useNavigate()

    return (
        <div className="flex items-center  w-full">
            <div className="flex items-center  w-1/3">
                <CustomButton
                    title={
                        <MenuOutlined
                            style={{
                                color: "aliceblue",
                            }}
                        />
                    }
                    className="!bg-transparent rounded-full w-12 h-12 border-none  hover:!bg-gray-600"
                    onClick={() => toggleCollapsed()}
                />

                <img src="/images/youtubeLogoDark.jpg" alt="Youtube Logo" width={200} />
            </div>

            <Search
                placeholder="input search text"
                className="header-searchBar w-1/3"
                onSearch={() => { }}
            />

            <div className="w-1/3 text-right">
                <Avatar icon={"A"} className="bg-white text-black" />
                <CustomButton
                    color="primary"
                    icon={<UserOutlined />}
                    className="text-white !bg-transparent rounded-full"
                    onClick={() => {
                        navigate("/login")
                    }}
                    title={"Login"}
                />
            </div>
        </div>
    );
};

export default Navbar;
