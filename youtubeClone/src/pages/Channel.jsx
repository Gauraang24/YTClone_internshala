import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChannelApi } from "../store/slices/userSlice";
import { useNavigate, useParams } from "react-router-dom";
import { unwrapResult } from "@reduxjs/toolkit";
import { toastMessage } from "../utils/functions";

const Channel = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const [channelInfo, setChannelInfo] = useState({});
  const [videosData, setVideosData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getChannelInfo();
  }, []);

  const getChannelInfo = () => {
    dispatch(getChannelApi({ param: `/${param.id}` }))
      .then(unwrapResult)
      .then((res) => {
        if (res.status) {
          setChannelInfo(res.data?.channelInfo);
          setVideosData(res?.data?.videosData);
          toastMessage(res?.message, "", true);
        } else {
          toastMessage(res?.message, "error", true);
          setChannelInfo({});
        }
      });
  };

  return (
    <div className="bg-black text-white">
      {/* Channel Banner */}
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={"https://via.placeholder.com/1920x400"}
          alt="Channel Banner"
        />
        <div className="absolute bottom-4 left-4 flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full border-4 border-gray-800 object-cover"
            src={channelInfo.channelIcon}
            alt="Profile"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-700">
              {channelInfo.name}
            </h1>
            <p className="text-lg font-bold text-gray-600">
              {channelInfo.description}
            </p>
            <p className=" font-bold text-gray-500">
              {channelInfo.subscribers} Subscribers
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className=" bg-[#FFFFFF1A] px-6 py-2 sticky top-0 z-10">
        <ul className="flex space-x-6 text-gray-400">
          <li className="cursor-pointer hover:text-white border-b-2 border-transparent hover:border-white pb-1">
            Home
          </li>
          <li className="cursor-pointer hover:text-white border-b-2 border-transparent hover:border-white pb-1">
            Videos
          </li>
          <li className="cursor-pointer hover:text-white border-b-2 border-transparent hover:border-white pb-1">
            Playlists
          </li>
          <li className="cursor-pointer hover:text-white border-b-2 border-transparent hover:border-white pb-1">
            About
          </li>
        </ul>
      </div>

      {/* Video Grid */}
      <div className="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videosData.map((video) => (
          <div
            key={video?._id}
            className="bg-[#FFFFFF1A] p-2 rounded-lg hover:bg-[#FFFFFF2A] cursor-pointer"
            onClick={() => {
              navigate(`/videos/${video?._id}`);
            }}
          >
            <img
              className="w-full h-40 object-cover rounded-md"
              src={video?.thumbnailUrl}
              alt={video?.title}
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold truncate">{video?.title}</h2>
              <p className="text-sm text-gray-400">{video?.views} Views</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
