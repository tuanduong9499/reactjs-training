const Input = ({ className, placeholder, value, onChange, required }) => {
  return (
    <input
      className={className}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};
export default Input;
