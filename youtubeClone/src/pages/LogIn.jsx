import React from "react";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../components/CustomComponent/CustomInput";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import CustomButton from "../components/CustomComponent/CustomButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginApi, setToken } from "../store/slices/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

const fields = [
  {
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    icons: <MailOutlined />,
  },
  {
    label: "Password",
    name: "password",
    placeholder: "Create a password",
    icons: <LockOutlined />,
  },
];
const LogIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submit = (values) => {
    const data = {
      email: values.email,
      password: values.password,
    };
    dispatch(
      loginApi({
        data: data,
      })
    )
      .then(unwrapResult)
      .then((res) => {
        if (res.status) {
          console.log("res.token", res.token);
          dispatch(dispatch(setToken({ token: res.token })));
        } else {
          console.log("Some error occured");
        }
      });
  };
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-[40%] border p-5 rounded-3xl">
        <div className="mx-auto">
          <img
            src="/images/youtubeLogoDark.jpg"
            className="mx-auto"
            width={300}
            alt=""
          />
        </div>
        <form onSubmit={handleSubmit(submit)} className="h-auto w-full">
          {fields.map((i) => {
            return (
              <div className="mt-4">
                <Controller
                  control={control}
                  name={i?.name}
                  rules={{
                    required: true,
                  }}
                  render={({ field: { onChange } }) => {
                    return (
                      <>
                        <label htmlFor={i?.name} className=" text-white">
                          {i?.label}
                        </label>

                        <CustomInput
                          className={"mt-2"}
                          prefix={i?.icons}
                          id={i?.name}
                          value={getValues(i?.name)}
                          onChange={(e) => {
                            onChange(e.target.value);
                          }}
                          placeholder={i?.placeholder}
                        />
                        {errors[i?.name] && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors[i?.name].message}
                          </p>
                        )}
                      </>
                    );
                  }}
                />
              </div>
            );
          })}
        </form>
        <p className="text-white my-5">
          Dont have an account?{" "}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            Sign Up
          </span>
        </p>

        <div className="flex gap-5 w-full justify-end mt-5">
          <CustomButton
            title={"Submit"}
            color="danger"
            variant="solid"
            className={"m-2"}
            onClick={handleSubmit(submit)}
          />
        </div>
      </div>
    </div>
  );
};

export default LogIn;
