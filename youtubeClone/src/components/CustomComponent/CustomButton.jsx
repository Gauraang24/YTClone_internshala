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
  type,
  variant,
  htmlType,
  loading,
}) => {
  return (
    <div>
      <Button
        type={type}
        className={className}
        prefix={prefix}
        placeholder={placeholder}
        onClick={onClick}
        icon={icon}
        color={color}
        variant={variant}
        htmlType={htmlType}
        loading={loading}
      >
        {title}
      </Button>
    </div>
  );
};

export default CustomButton;
