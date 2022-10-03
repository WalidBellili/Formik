const Input = ({ name, type, onChange, value, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
