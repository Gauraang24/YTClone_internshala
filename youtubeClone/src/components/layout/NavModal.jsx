import { Input, Upload } from "antd";
import React, { useEffect, useState } from "react";
import CustomModal from "../CustomComponent/CustomModal";
import { PlusOutlined } from "@ant-design/icons";
import { getBase64 } from "../../utils/functions";
import CustomInput from "../CustomComponent/CustomInput";
import { Controller, useForm } from "react-hook-form";
import CustomButton from "../CustomComponent/CustomButton";
import { useDispatch, useSelector } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { createChannelFunc, setChannelId } from "../../store/slices/userSlice";

const NavModal = ({ modalKey, modal, setModal }) => {
  const dispatch = useDispatch();
  const [imageUrl, setImageUrl] = useState();
  const userId = useSelector((state) => state.user.user.userId);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (modal) {
      reset({
        channelPic: "",
        channelName: "",
        channelDesc: "",
      });
    }
  }, [modal]);

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
    reset,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      channelPic: "",
      channelName: "",
      channelDesc: "",
    },
  });

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      {<PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </button>
  );

  const handleChange = (info) => {
    if (info.file) {
      getBase64(info.file, (url) => {
        setImageUrl(url); // Set the image URL
      });
    } else {
      console.error("File is undefined");
    }
  };

  const handleCreateChannel = async (values) => {
    const formData = new FormData();
    formData.append("channelIcon", values.channelPic);
    formData.append("name", values.channelName);
    formData.append("description", values.channelDesc);
    formData.append("userId", userId);

    setLoading(true);

    await dispatch(createChannelFunc({ data: formData }))
      .then(unwrapResult)
      .then((result) => {
        setLoading(false);
        if (result.status) {
          dispatch(setChannelId({ channelId: result?.data?._id }));
          setModal(false);
        } else {
          setModal(false);
          console.log("Some Error Occured");
        }
      });
  };

  //   const handleVideoUpload = async (data) => {
  //     if (!videoFile) {
  //       message.error("Video is required.");
  //       return;
  //     }

  //     const formData = new FormData();
  //     formData.append("video", videoFile);
  //     formData.append("title", data.videoTitle);
  //     formData.append("description", data.description);

  //     try {
  //       const response = await fetch("YOUR_BACKEND_ENDPOINT", {
  //         method: "POST",
  //         body: formData,
  //       });

  //       if (response.ok) {
  //         message.success("Video uploaded successfully!");
  //         reset(); // Reset the form
  //         setModal(false); // Close the modal
  //       } else {
  //         message.error("Failed to upload video.");
  //       }
  //     } catch (error) {
  //       message.error("An error occurred while uploading.");
  //       console.error(error);
  //     }
  //   };

  //   const handleVideoChange = (info) => {
  //     if (info.file && info.file.type.startsWith("video/")) {
  //       setVideoFile(info.file);
  //     } else {
  //       message.error("Please upload a valid video file.");
  //     }
  //   };

  return (
    <>
      <CustomModal
        title={
          modalKey === "1"
            ? "Create Channel"
            : modalKey === "3"
            ? "Upload Videos"
            : ""
        }
        open={modal}
        onCancel={() => {
          setModal(false);
        }}
        footer={() => {
          return null;
        }}
      >
        {modalKey === "1" ? (
          <div style={{ padding: "16px" }}>
            <form
              onSubmit={handleSubmit(handleCreateChannel)}
              className=" flex flex-col gap-5"
            >
              <Controller
                control={control}
                name={"channelPic"}
                rules={{
                  required: "Channel Icon is required",
                }}
                render={({ field: { onChange } }) => {
                  return (
                    <>
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader text-white w-max mx-auto"
                        showUploadList={false}
                        beforeUpload={() => false}
                        onChange={(e) => {
                          handleChange(e);
                          onChange(e.file);
                        }}
                      >
                        {imageUrl ? (
                          <img
                            src={imageUrl}
                            alt="avatar"
                            style={{
                              width: "100%",
                            }}
                          />
                        ) : (
                          uploadButton
                        )}
                      </Upload>

                      {errors?.channelPic && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors?.channelPic?.message}
                        </p>
                      )}
                    </>
                  );
                }}
              />

              <Controller
                control={control}
                name={"channelName"}
                rules={{
                  required: "Channel Name is required.",
                }}
                render={({ field: { onChange } }) => {
                  return (
                    <>
                      <CustomInput
                        id={"channel_name"}
                        className={
                          "mt-2 placeholder:text-white rounded-md w-full flex-1"
                        }
                        value={getValues("channelName")}
                        onChange={(e) => {
                          onChange(e.target.value);
                        }}
                        placeholder={"Enter channel name"}
                      />
                      {errors?.channelName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors?.channelName?.message}
                        </p>
                      )}
                    </>
                  );
                }}
              />

              <Controller
                control={control}
                name={"channelDesc"}
                rules={{
                  required: "Channel Description is required.",
                }}
                render={({ field: { onChange } }) => {
                  return (
                    <>
                      <Input.TextArea
                        rows={4}
                        placeholder="Enter channel description"
                        onChange={(e) => {
                          onChange(e.target.value);
                        }}
                        value={getValues("channelDesc")}
                        className={
                          "bg-transparent hover:bg-transparent active:!bg-transparent  focus-within:bg-transparent mt-2 placeholder:text-white rounded-md w-full flex-1 text-white"
                        }
                      />
                      {errors?.channelDesc && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors?.channelDesc?.message}
                        </p>
                      )}
                    </>
                  );
                }}
              />
            </form>

            <div className="flex gap-5 w-full mt-5">
              <div className="w-1/2">
                <CustomButton
                  title={"Cancel"}
                  color=""
                  onClick={() => {
                    setModal(false);
                  }}
                  variant="outlined"
                  className={"m-2 h-10 w-full"}
                  htmlType="submit"
                />
              </div>
              <div className="w-1/2">
                <CustomButton
                  title={"Submit"}
                  color="danger"
                  onClick={handleSubmit(handleCreateChannel)}
                  variant="solid"
                  className={"m-2 h-10 w-full"}
                  htmlType="submit"
                  loading={loading}
                />
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* <div style={{ padding: "16px" }}>
              <form onSubmit={handleVideoUpload}>
                <Controller
                  control={control}
                  name={"Video"}
                  rules={{
                    required: "Video is required",
                  }}
                  render={() => {
                    return (
                      <Upload
                        {...field}
                        name="video"
                        listType="picture-card"
                        className="avatar-uploader text-white w-max mx-auto"
                        showUploadList={false}
                        beforeUpload={() => false} // Prevent auto-upload to allow manual handling
                        onChange={handleVideoChange} // Pass the selected file to handleChange
                      >
                        {videoFile ? (
                          <video
                            controls
                            src={URL.createObjectURL(videoFile)}
                            style={{ width: "100%" }}
                          />
                        ) : (
                          <div>
                            <div style={{ marginTop: 8 }}>Upload</div>
                          </div>
                        )}
                      </Upload>
                    );
                  }}
                />

                <Controller
                  control={control}
                  name={"videoTitle"}
                  rules={{
                    required: "Title is required",
                  }}
                  render={() => {
                    return (
                      <>
                        <CustomInput
                          id={"channel_name"}
                          className={
                            "mt-2 placeholder:text-white rounded-md w-full flex-1"
                          }
                          value={""}
                          onChange={(e) => {}}
                          placeholder={"Title"}
                        />
                      </>
                    );
                  }}
                />

                <Controller
                  control={control}
                  name={"videoTitle"}
                  rules={{
                    required: "Description is required",
                  }}
                  render={() => {
                    return (
                      <>
                        <Input.TextArea
                          rows={4}
                          placeholder="Description"
                          onChange={(e) => {}}
                          className={
                            "bg-transparent hover:bg-transparent active:!bg-transparent  focus-within:bg-transparent mt-2 placeholder:text-white rounded-md w-full flex-1 text-white"
                          }
                        />
                      </>
                    );
                  }}
                />
              </form>
              <div className="flex gap-5 w-full mt-5">
                <div className="w-1/2">
                  <CustomButton
                    title={"Cancel"}
                    color=""
                    onClick={() => {
                      setModal(false);
                    }}
                    variant="outlined"
                    className={" h-10 w-full"}
                    htmlType="submit"
                  />
                </div>
                <div className="w-1/2">
                  <CustomButton
                    title={"Submit"}
                    color="danger"
                    variant="solid"
                    className={" h-10 w-full"}
                    htmlType="submit"
                  />
                </div>
              </div>
            </div> */}
          </>
        )}
      </CustomModal>
    </>
  );
};

export default NavModal;
