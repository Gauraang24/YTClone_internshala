import React from "react";

const VideoCard = ({ imgLink, title, channelName, views, postedOn }) => {
  return (
    <div className="max-w-[400px] w-full mb-6 border rounded-lg cursor-pointer p-2 border-gray-600 hover:shadow-lg hover:shadow-gray-800">
      <div className=" aspect-video rounded-2xl overflow-hidden ">
        <img src={imgLink} alt="thumbnail" />
      </div>
      <p className="font-semibold">{title}</p>
      <p className="font-normal text-gray-500">{channelName}</p>
      <p className="font-normal text-gray-500">
        {views} views | {postedOn} year ago
      </p>
    </div>
  );
};

export default VideoCard;
