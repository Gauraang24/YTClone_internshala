import { Input } from "antd";
import React from "react";

const CustomInput = ({ className, prefix, id, placeholder, onChange, value }) => {
    return (
        <div>
            <Input
                className={` ${className} bg-transparent active:!bg-transparent  focus-within:bg-transparent hover:bg-transparent text-white  customInput`}
                prefix={prefix}
                id={id}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

export default CustomInput;
