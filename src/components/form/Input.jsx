import React from "react";

const Input = ({
  label,
  name,
  register,
  type = "text",
  placeholder = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name)}
        id={name}
        type={type}
        placeholder={placeholder}
        className={`py-1 px-2 border-b border-black text-sm`}
      />
    </div>
  );
};

export default Input;
