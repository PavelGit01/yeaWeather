import { InputHTMLAttributes } from "react";

const Input = ({
  placeholder,
  className = "",
  type = "text",
  value,
  onChange,
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={className}
      value={value}
      onChange={onChange}
    />
  );
};
export default Input;
