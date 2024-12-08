import React from "react";

const VideoCard = ({ imgLink, title, channelName, views, postedOn }) => {
  return (
    <div className="w-full mb-6 ">
      <div className=" aspect-video rounded-2xl overflow-hidden ">
        <img src={imgLink} alt="thumbnail" />
      </div>
      <p>{title}</p>
      <p>{channelName}</p>
      <p>
        {views} views | {postedOn} year ago
      </p>
    </div>
  );
};

export default VideoCard;
