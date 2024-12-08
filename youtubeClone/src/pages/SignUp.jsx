import { LockOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Controller, useForm } from "react-hook-form";
import CustomInput from "../components/CustomComponent/CustomInput";
import CustomButton from "../components/CustomComponent/CustomButton";
import { REGEX_FOR_EMAIL, REGEX_FOR_NAME, REGEX_FOR_PASSWORD } from "../utils/constants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const formData = [
    {
        label: "Name",
        name: "name",
        placeholder: "Enter your name",
        icons: <UserOutlined />,
    },
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

const getValidationRules = (name, label) => {
    let pattern;
    switch (name) {
        case "name":
            pattern = REGEX_FOR_NAME;
            break;
        case "email":
            pattern = REGEX_FOR_EMAIL;
            break;
        case "password":
            pattern = REGEX_FOR_PASSWORD;
            break;
        default:
            pattern = null;
    }
    return {
        required: `${label} is a required field`,
        ...(pattern && {
            pattern: {
                value: pattern,
                message: `Please enter a valid ${label}`,
            },
        }),
    };
};

const SignUp = () => {
    const navigate = useNavigate()
    const { handleSubmit, control, formState: { errors }, getValues, reset } = useForm({
        mode: "onChange",
        reValidateMode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });
    const submit = (data) => {
        console.log("Form Data:", data);
    };

    return (

        <div className="h-screen w-screen flex justify-center items-center">

            <div className="w-[40%] border p-5 rounded-3xl">
                <div className='mx-auto'>

                    <img src="/images/youtubeLogoDark.jpg" className='mx-auto' width={300} alt="" />
                </div>

                <form onSubmit={handleSubmit(submit)} className="h-auto w-full">
                    {formData.map((i, index) => (
                        <div key={index} className="mt-4">
                            <Controller
                                control={control}
                                name={i?.name}
                                rules={getValidationRules(i?.name, i?.label)}
                                render={({ field: { onChange } }) => (
                                    <>
                                        <label htmlFor={i?.name} className="text-white">
                                            {i?.label}
                                        </label>
                                        <CustomInput
                                            className={"mt-2"}
                                            prefix={i?.icons}
                                            id={i?.name}
                                            value={getValues(i?.name)}
                                            placeholder={i?.placeholder}
                                            onChange={(e) => onChange(e.target.value)}
                                        />
                                        {errors[i?.name] && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors[i?.name].message}
                                            </p>
                                        )}
                                    </>
                                )}
                            />
                        </div>
                    ))}
                    <p className="text-white my-5">
                        Already have an account?{" "}
                        <span
                            className="text-blue-600 cursor-pointer"
                            onClick={() => {
                                navigate("/login")
                            }}
                        >
                            Try to Log In
                        </span>
                    </p>
                    <div className="flex gap-5 w-full justify-end mt-5">
                        <CustomButton
                            title={"Submit"}
                            color="danger"
                            variant="solid"
                            className={"m-2"}
                            htmlType="submit"
                        />
                    </div>
                </form>
            </div>
        </div>

    );
};

export default SignUp;
