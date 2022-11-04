import LoginFormField from './LoginFormField';

const LoginForm = () => {
  return (
    <form
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {/* <span className="block mb-4 text-2xl text-sky-600">Sign in:</span> */}
      <LoginFormField
        inputId="login"
        inputType="text"
        label="Login"
        placeholder="Login"
      />
      <LoginFormField
        inputId="password"
        inputType="password"
        label="Password"
        placeholder="Password"
      />
      <LoginFormField
        inputId="repeat-password"
        inputType="password"
        label="Repeat password"
        placeholder="Repeat password"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded px-4 py-2 focus:outline-none focus:shadow-outline transition-all font-bold"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
