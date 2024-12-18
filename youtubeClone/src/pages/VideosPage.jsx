import { Avatar, Dropdown } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "../components/CustomComponent/CustomButton";
import { DislikeOutlined, LikeOutlined, MoreOutlined } from "@ant-design/icons";
import CustomInput from "../components/CustomComponent/CustomInput";
import { getVideosById } from "../store/slices/videoSlice";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Controller, useForm } from "react-hook-form";
import {
  addCommentApi,
  deleteCommentApi,
  editCommentApi,
} from "../store/slices/userSlice";
import { formatDistanceToNow } from "date-fns";
import CustomModal from "../components/CustomComponent/CustomModal";

const VideosPage = () => {
  const param = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state) => state.user.user.userId);
  const [videoData, setVideoData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [activeComment, setActiveComment] = useState("");
  const [open, setOpen] = useState(false);

  const formatRelativeTime = (dateString) => {
    return formatDistanceToNow(new Date(dateString), { addSuffix: true });
  };

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  useEffect(() => {
    getVideosData();
  }, []);

  const onSubmit = (values) => {
    const data = {
      comment: values?.comment,
      videoId: param.id,
      userId: userId,
    };

    if (values?.comment !== "" && values?.comment !== undefined) {
      dispatch(
        addCommentApi({
          data: data,
        })
      )
        .then(unwrapResult)
        .then((res) => {
          if (res.status) {
            getVideosData();
            reset({});
          } else {
            console.log("some error occurred", res.message);
          }
        });
    }
  };

  const editSubmit = (values) => {
    const data = {
      comment: values?.editComment,
    };

    if (values?.editComment !== "" && values?.editComment !== undefined) {
      dispatch(
        editCommentApi({
          data: data,
          param: `/${activeComment}`,
        })
      )
        .then(unwrapResult)
        .then((res) => {
          if (res.status) {
            console.log("Comment added");
            getVideosData();
            reset({});
            setActiveComment("");
          } else {
            console.log("some error occurred", res.message);
          }
        });
    }
  };

  const deleteComment = () => {
    dispatch(deleteCommentApi({ param: `/${activeComment}` }))
      .then(unwrapResult)
      .then((res) => {
        if (res.status) {
          getVideosData();
          reset({});
          setActiveComment("");
          setOpen(false);
        } else {
          setOpen(false);
          console.log("Some Error Occurred", res.message);
        }
      });
  };

  const getVideosData = () => {
    dispatch(
      getVideosById({
        param: `/${param.id}`,
      })
    )
      .then(unwrapResult)
      .then((res) => {
        if (res.status) {
          setVideoData([res?.data?.video]);
          setCommentData(res?.data?.comments);
        } else {
          setVideoData({});
        }
      });
  };
  // Dummy Data
  const suggestedVideos = [
    {
      id: 1,
      title: "React Tutorial",
      thumbnail: "https://via.placeholder.com/150",
      views: "1.2M views",
    },
    {
      id: 2,
      title: "JavaScript Basics",
      thumbnail: "https://via.placeholder.com/150",
      views: "800K views",
    },
    {
      id: 3,
      title: "CSS Animations",
      thumbnail: "https://via.placeholder.com/150",
      views: "400K views",
    },
    {
      id: 4,
      title: "Web Dev Tips",
      thumbnail: "https://via.placeholder.com/150",
      views: "300K views",
    },
  ];

  const comments = [
    {
      id: 1,
      name: "John Doe",
      text: "This video was super helpful!",
      timestamp: "2 hours ago",
    },
    {
      id: 2,
      name: "Jane Smith",
      text: "Great explanation, thanks!",
      timestamp: "1 day ago",
    },
    {
      id: 3,
      name: "Coder123",
      text: "Loved the part about hooks.",
      timestamp: "3 days ago",
    },
    {
      id: 4,
      name: "Coder123",
      text: "Loved the part about hooks.",
      timestamp: "3 days ago",
    },
  ];

  const handleDropDown = (e, comment) => {
    if (e.key === "1") {
      setActiveComment(comment._id);
    } else if (e.key === "2") {
      setActiveComment(comment._id);
      setOpen(true);
    }
  };

  return (
    <section className="text-white flex flex-col md:flex-row bg-black h-full">
      {/* Left Section */}
      <div className="flex-1 flex flex-col p-4 space-y-4">
        {/* Video Player */}
        {videoData.map((i) => {
          return (
            <>
              <div className="w-full flex items-center justify-center">
                <iframe
                  className="w-full h-full rounded-lg aspect-video"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Video Player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>{i?.title}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar
                    icon={i?.channelName.split("")[0].slice(0, 1)}
                    style={{
                      backgroundColor: "#a8a8a8",
                      verticalAlign: "middle",
                    }}
                    className="cursor-pointer"
                    onClick={() => {
                      navigate(`/channel/${i?.channelId}`);
                    }}
                  />
                  <div>
                    <p
                      className="cursor-pointer"
                      onClick={() => {
                        navigate(`/channel/${i?.channelId}`);
                      }}
                    >
                      {i?.channelName}
                    </p>
                    <p>{i?.subscribers || 0} Subscribers</p>
                  </div>
                  <CustomButton
                    title={"Subscribe"}
                    className={"rounded-full font-bold"}
                  />
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <p>
                      <LikeOutlined />
                      {/* <DislikeFilled /> */}
                    </p>
                    <p>{i?.likes}</p>
                  </div>
                  <div className="flex flex-col items-center">
                    <p>
                      <DislikeOutlined />
                      {/* <LikeFilled /> */}
                    </p>
                    <p>{i?.dislikes}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}

        {/* Comment Section */}
        <div className=" pr-4 rounded-lg flex-1">
          <h2 className="text-xl font-semibold mb-4">Comments</h2>

          <div>
            <div className="flex items-center gap-4 mb-4">
              <Avatar
                icon={"A"}
                style={{
                  backgroundColor: "#a8a8a8",
                  verticalAlign: "middle",
                }}
              />
              <div className="mx-4 flex-1">
                <Controller
                  control={control}
                  name="comment"
                  render={({ field: { onChange } }) => {
                    return (
                      <>
                        <CustomInput
                          className={
                            "mt-2 placeholder:text-white border-t-0 border-x-0 rounded-none w-full flex-1"
                          }
                          id={"comment"}
                          value={getValues("comment")}
                          placeholder="Add a comment..."
                          onChange={(e) => {
                            onChange(e.target.value);
                          }}
                          errors={errors?.comment?.message}
                        />
                      </>
                    );
                  }}
                />
              </div>
              <CustomButton
                title={"Comment"}
                onClick={handleSubmit(onSubmit)}
              />
            </div>
          </div>
          <div className="space-y-4">
            {commentData.map((comment) => {
              return (
                <div
                  key={comment.id}
                  className="bg-[#FFFFFF1A] p-3 rounded-md flex justify-between items-center"
                >
                  <div className="flex-1">
                    <p className="font-bold">{comment.userId?.name}</p>
                    <p className="text-sm text-gray-400">
                      {formatRelativeTime(comment.createdAt)}
                    </p>

                    <p>
                      {activeComment == comment?._id ? (
                        <div className="flex gap-6 mt-4 w-full justify-between items-center">
                          <div className="flex-1">
                            <Controller
                              control={control}
                              name="editComment"
                              render={({ field: { onChange } }) => {
                                return (
                                  <>
                                    <CustomInput
                                      className={
                                        "mt-2 placeholder:text-white border-t-0 border-x-0 rounded-none w-full flex-1"
                                      }
                                      id={"editComment"}
                                      value={getValues("editComment")}
                                      placeholder="Add a comment..."
                                      onChange={(e) => {
                                        onChange(e.target.value);
                                      }}
                                      errors={errors?.editComment?.message}
                                    />
                                  </>
                                );
                              }}
                            />
                          </div>
                          <div className="">
                            <CustomButton
                              className={""}
                              title={"Update"}
                              onClick={handleSubmit(editSubmit)}
                            />
                          </div>
                        </div>
                      ) : (
                        comment?.comment
                      )}
                    </p>
                  </div>

                  {userId === comment.userId._id && (
                    <>
                      <Dropdown
                        menu={{
                          items: [
                            {
                              key: "1",
                              label: "Edit",
                            },
                            {
                              key: "2",
                              label: "Delete",
                            },
                          ],
                          onClick: (e) => {
                            handleDropDown(e, comment);
                          },
                        }}
                      >
                        <MoreOutlined />
                      </Dropdown>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full min-w-[300px] md:w-[20%] p-4">
        <h2 className="text-xl font-semibold mb-4">Suggested Videos</h2>
        <div className="space-y-4">
          {suggestedVideos.map((video) => (
            <div
              key={video.id}
              className="flex space-x-4 items-center bg-[#FFFFFF1A]"
            >
              <img
                className="w-24 h-16 rounded-md object-cover"
                src={video.thumbnail}
                alt={video.title}
              />
              <div>
                <p className="font-bold truncate">{video.title}</p>
                <p className="text-sm text-gray-400">{video.views}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CustomModal
        open={open}
        onCancel={() => {
          setOpen(false);
        }}
        footer={<></>}
      >
        <div>
          <p className="text-white">Are you sure you want to delete comment?</p>
          <div className="flex gap-4">
            <div className="w-1/2">
              <CustomButton
                title={"No"}
                color=""
                variant=""
                className={"my-2 w-full"}
                onClick={() => {
                  setOpen(false);
                }}
              />
            </div>
            <div className="w-1/2">
              <CustomButton
                title={"Yess"}
                color="danger"
                variant="solid"
                className={"my-2 w-full"}
                onClick={handleSubmit(deleteComment)}
              />
            </div>
          </div>
        </div>
      </CustomModal>
    </section>
  );
};

export default VideosPage;
