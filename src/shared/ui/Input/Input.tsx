type Props = {
  type?: string;
  placeholder?: string;
  className?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  placeholder,
  className = "",
  type = "text",
  value,
  onChange,
}: Props) => {
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
