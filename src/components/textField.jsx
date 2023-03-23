import React, { useState } from "react";
import PropTypes from "prop-types";

const TextField = (props) => {
  const { name, label, value, onChange, type, error } = props;

  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "");
  };
  return (
    <div className="mb-4">
      <label htmlFor={name}>{label}</label>
      <div className="input-group has-validation">
        <input
          type={showPassword ? "text" : type}
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          className={getInputClasses()}
        />
        {type === "password" && (
          <button type="button" className="btn btn-outline-secondary" onClick={toggleShowPassword}>
            {showPassword ? "Скрыть" : "Показать"} пароль
          </button>
        )}
        {error && <div className="invalid-feedback">{error}</div>}
      </div>
    </div>
  );
};

TextField.defaultValues = {
  type: "text",
};

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
};

export default TextField;
