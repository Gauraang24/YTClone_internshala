import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../components/CustomComponent/CustomInput';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import CustomButton from '../components/CustomComponent/CustomButton';
import CustomModal from '../components/CustomComponent/CustomModal';

const fields = [{
    label: "Email",
    name: "email",
    placeholder: "Enter your email",
    icons: <MailOutlined />,
}, {
    label: "Password",
    name: "password",
    placeholder: "Create a password",
    icons: <LockOutlined />,
}]
const LogIn = ({ close, setIsLogin, open, isLogin }) => {
    const { handleSubmit, control } = useForm();

    const submit = () => {
        console.log("Submit");
    };
    return (
        <CustomModal
            open={open}
            title={<p>{isLogin ? "Login In" : "Create Account"}</p>}
            onCancel={() => {
                close(false);
            }}
            onOk={() => {
                close(false);
            }}
            className={""}
            footer={() => <></>}
        >
            <div>
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
                                    render={() => {
                                        return (
                                            <>
                                                <label htmlFor={i?.name} className=" text-white">
                                                    {i?.label}
                                                </label>

                                                <CustomInput
                                                    className={"mt-2"}
                                                    prefix={i?.icons}
                                                    id={i?.name}
                                                    placeholder={i?.placeholder}
                                                />
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
                            setIsLogin(false);
                        }}
                    >
                        Sign Up
                    </span>
                </p>

                <div className="flex gap-5 w-full justify-end mt-5">
                    <CustomButton
                        title={"cancel"}
                        color="default"
                        variant="outlined"
                        className={"m-2 !bg-transparent text-white"}
                        onClick={() => {
                            close(false);
                        }}
                    />
                    <CustomButton
                        title={"Submit"}
                        color="danger"
                        variant="solid"
                        className={"m-2"}
                        onClick={() => {
                            close(false);
                        }}
                    />
                </div>
            </div>
        </CustomModal>

    )
}

export default LogIn
