import { Button } from "antd";
import React from "react";

const CustomButton = ({
    className,
    prefix,
    placeholder,
    onClick,
    icon,
    color,
    title,
    variant,
    htmlType
}) => {
    return (
        <div>
            <Button
                className={className}
                prefix={prefix}
                placeholder={placeholder}
                onClick={onClick}
                icon={icon}
                color={color}
                variant={variant}
                htmlType={htmlType}
            >
                {title}
            </Button>
        </div>
    );
};

export default CustomButton;
