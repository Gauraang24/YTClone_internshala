import React from 'react'
import { Controller, useForm } from 'react-hook-form';
import CustomInput from '../components/CustomComponent/CustomInput';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import CustomButton from '../components/CustomComponent/CustomButton';
import { useNavigate } from 'react-router-dom';

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
const LogIn = () => {
    const { handleSubmit, control } = useForm();
    const navigate = useNavigate()

    const submit = () => {
        console.log("Submit");
    };
    return (
        <div className='w-screen h-screen flex justify-center items-center'>

            <div className='w-[40%] border p-5 rounded-3xl'>
                <div className='mx-auto'>

                    <img src="/images/youtubeLogoDark.jpg" className='mx-auto' width={300} alt="" />
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
                            navigate("/signUp")

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
                        onClick={() => {

                        }}
                    />
                </div>
            </div>
        </div>

    )
}

export default LogIn
