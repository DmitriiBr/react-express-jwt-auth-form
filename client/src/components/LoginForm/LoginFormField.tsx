import React from 'react';
import CustomInput from '../UI/CustomInput';

interface LoginFormFieldProps {
  inputId: string;
  label: string;
  inputType: string;
  placeholder?: string;
}

const LoginFormField: React.FC<LoginFormFieldProps> = ({
  inputId,
  inputType,
  label,
  placeholder,
}) => {
  return (
    <div className="mb-5 last:mb-0">
      <label
        htmlFor={inputId}
        className="block font-bold text-sm"
      >
        {label}
      </label>
      <CustomInput
        id={inputId}
        type={inputType}
        placeholder={placeholder}
      />
    </div>
  );
};

export default LoginFormField;
