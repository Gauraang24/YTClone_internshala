import React, { useState } from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";
import { Input } from "antd";
import CustomModal from "../CustomComponent/CustomModal";
import SignUp from "../../pages/SignUp";
import CustomButton from "../CustomComponent/CustomButton";
import LogIn from "../../pages/LogIn";
const { Search } = Input;
const Navbar = ({ collapsed, setCollapsed }) => {
    const [openModal, setOpenModal] = useState(false);
    const [isLogin, setIsLogin] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

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
                        setOpenModal(true);
                    }}
                    title={"Sign Up"}
                />
            </div>

            {/* <CustomModal
                open={openModal}
                title={<p>{isLogin ? "Login In" : "Create Account"}</p>}
                onCancel={() => {
                    setOpenModal(false);
                }}
                onOk={() => {
                    setOpenModal(false);
                }}
                className={""}
                footer={() => <></>}
            > */}
            {isLogin ? (
                <LogIn close={setOpenModal} setIsLogin={setIsLogin} isLogin={isLogin} open={openModal} />
            ) : (
                <SignUp close={setOpenModal} setIsLogin={setIsLogin} isLogin={isLogin} open={openModal} />
            )}
            {/* </CustomModal> */}
        </div>
    );
};

export default Navbar;
