import React from "react";

const Channel = () => {
  // Dummy Data
  const channelInfo = {
    banner: "https://via.placeholder.com/1920x400",
    profilePic: "https://via.placeholder.com/150",
    name: "Tech World",
    subscribers: "1.2M subscribers",
    description: "Tech tutorials, tips, and tricks to boost your skills!",
  };

  const videos = [
    {
      id: 1,
      title: "Learn React in 30 Minutes",
      thumbnail: "https://via.placeholder.com/300",
      views: "1M views",
    },
    {
      id: 2,
      title: "JavaScript Tips & Tricks",
      thumbnail: "https://via.placeholder.com/300",
      views: "800K views",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox",
      thumbnail: "https://via.placeholder.com/300",
      views: "500K views",
    },
    {
      id: 4,
      title: "Mastering Redux",
      thumbnail: "https://via.placeholder.com/300",
      views: "400K views",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Channel Banner */}
      <div className="relative">
        <img
          className="w-full h-64 object-cover"
          src={channelInfo.banner}
          alt="Channel Banner"
        />
        <div className="absolute bottom-4 left-4 flex items-center space-x-4">
          <img
            className="w-24 h-24 rounded-full border-4 border-gray-800"
            src={channelInfo.profilePic}
            alt="Profile"
          />
          <div>
            <h1 className="text-2xl font-bold">{channelInfo.name}</h1>
            <p className="text-gray-400">{channelInfo.subscribers}</p>
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
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-[#FFFFFF1A] p-2 rounded-lg hover:bg-[#FFFFFF2A]"
          >
            <img
              className="w-full h-40 object-cover rounded-md"
              src={video.thumbnail}
              alt={video.title}
            />
            <div className="mt-2">
              <h2 className="text-lg font-semibold truncate">{video.title}</h2>
              <p className="text-sm text-gray-400">{video.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channel;
