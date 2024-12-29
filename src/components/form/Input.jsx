import React from "react";

const Input = ({
  label,
  name,
  register,
  type = "text",
  placeholder = "",
  className = "",
  errors,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name)}
        id={name}
        type={type}
        placeholder={placeholder}
        className="py-1 px-2 border-b border-black text-sm focus:outline-none"
      />
      {errors[name]?.message && (
        <p className="text-red-500 text-xs">*{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default Input;
