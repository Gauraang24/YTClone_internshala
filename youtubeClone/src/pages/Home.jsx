import React from "react";
import VideoCard from "../components/CustomComponent/VideoCard";

const sampleData = [
    {
        videoId: "video01",
        title: "Learn React in 30 Minutes",
        thumbnailUrl: "https://images.unsplash.com/photo-1497015455546-1da71faf8d06?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        channelName: "Gaurang More",
        channelId: "channel01",
        uploader: "user01",
        views: 15200,
        uploadDate: "2024-09-20",
    },
    {
        videoId: "video01",
        title: "Learn React in 30 Minutes",
        thumbnailUrl: "https://images.unsplash.com/photo-1497015455546-1da71faf8d06?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        channelName: "Gaurang More",
        channelId: "channel01",
        uploader: "user01",
        views: 15200,
        uploadDate: "2024-09-20",
    },
    {
        videoId: "video01",
        title: "Learn React in 30 Minutes",
        thumbnailUrl: "https://images.unsplash.com/photo-1497015455546-1da71faf8d06?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        channelName: "Gaurang More",
        channelId: "channel01",
        uploader: "user01",
        views: 15200,
        uploadDate: "2024-09-20",
    },
    {
        videoId: "video01",
        title: "Learn React in 30 Minutes",
        thumbnailUrl: "https://images.unsplash.com/photo-1497015455546-1da71faf8d06?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        channelName: "Gaurang More",
        channelId: "channel01",
        uploader: "user01",
        views: 15200,
        uploadDate: "2024-09-20",
    },
];
const Home = () => {
    return (
        <div className="text-white grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-4 justify-center">
            {sampleData.map(i => {
                return <div key={i?.videoId}>
                    <VideoCard
                        imgLink={
                            i?.thumbnailUrl
                        }
                        title={i?.title}
                        channelName={i?.channelName}
                        views={i?.views}
                        postedOn={i?.uploadDate}
                    />
                </div>
            })}

        </div>
    );
};

export default Home;
