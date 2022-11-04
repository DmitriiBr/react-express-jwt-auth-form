import React from 'react';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className="w-full flex place-content-center">
      <div className="max-w-xs mt-20">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
