import React from 'react';

interface CustomInputProps extends React.ComponentPropsWithoutRef<'input'> {}

const CustomInput: React.FC<CustomInputProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className="rounded border px-2 py-2 text-1xl w-full appearance-none shadow leading-tight focus:outline-none focus:shadow-outline hover:border-gray-300 transition-all"
    />
  );
};

export default CustomInput;
