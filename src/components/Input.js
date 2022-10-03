const Input = ({ error, name, type, onChange, value, placeholder }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        error={error}
      />
      {error && <p>{error.name}</p>}
    </>
  );
};

export default Input;
