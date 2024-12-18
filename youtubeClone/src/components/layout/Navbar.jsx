import React, { useState } from "react";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import { Input } from "antd";
import CustomButton from "../CustomComponent/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavModal from "./NavModal";
import {
  getAllVideosFunc,
  resetVideoState,
  setSearch,
  setVideoList,
} from "../../store/slices/videoSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { resetUserState } from "../../store/slices/userSlice";

const { Search } = Input;

const Navbar = ({ collapsed, setCollapsed }) => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.user.user);
  const search = useSelector((state) => state.user.video.searchValue);
  const filter = useSelector((state) => state.user.video.filter);
  const [modal, setModal] = useState(false);
  const [modalKey, setModalKey] = useState("");

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const navigate = useNavigate();

  const items = [
    {
      key: "1",
      label: "Create Channel",
    },
    {
      key: "4",
      label: "Logout",
    },
  ];

  const items2 = [
    {
      key: "2",
      label: "View your Channel",
    },
    {
      key: "3",
      label: "Upload Videos",
    },
    {
      key: "4",
      label: "Logout",
    },
  ];

  const handleDropDown = (e) => {
    if (e.key === "1" || e.key === "3") {
      setModal(true);
      setModalKey(e.key);
    } else if (e.key === "2") {
      navigate(`channel/${selector?.channelId}`);
    } else if (e.key === "4") {
      dispatch(resetUserState());
      dispatch(resetVideoState());
    }
  };

  const menu = {
    items: selector.channelId ? items2 : items,
    onClick: handleDropDown,
  };

  const onSearch = async (event) => {
    const { value } = event.target;

    try {
      await dispatch(
        setSearch({
          searchValue: value,
        })
      );

      const query = {
        searchQuery: value,
        category: filter === "all" ? "" : filter,
      };

      if (selector.token) {
        const response = await dispatch(getAllVideosFunc({ query })).then(
          unwrapResult
        );

        if (response.status) {
          dispatch(setVideoList({ videoList: response.data }));
        } else {
          console.error("Failed to fetch videos");
        }
      }
    } catch (error) {
      console.error("Error during search:", error.message);
    }
  };

  return (
    <section className="flex items-center px-4  w-full">
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
        onChange={onSearch}
        value={search}
      />

      <div className="w-1/3 text-right">
        {selector.token ? (
          <>
            <Dropdown menu={menu}>
              <Avatar
                icon={"A"}
                className="bg-white cursor-pointer text-black"
              />
            </Dropdown>
          </>
        ) : (
          <>
            <CustomButton
              color="primary"
              icon={<UserOutlined />}
              className="text-white !bg-transparent rounded-full"
              onClick={() => {
                navigate("/login");
              }}
              title={"Login"}
            />
          </>
        )}
      </div>

      <NavModal modalKey={modalKey} modal={modal} setModal={setModal} />
    </section>
  );
};

export default Navbar;
