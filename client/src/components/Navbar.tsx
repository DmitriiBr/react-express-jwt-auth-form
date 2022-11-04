import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { RouterPaths } from '../routes';

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const logOutHandler = () => {
    setIsAuth(false);
  };

  return (
    <div className="px-2 py-4 bg-gray-600">
      <ul className="flex items-center">
        <Link to={RouterPaths.HOME}>
          <li className="mr-2 text-2xl text-slate-200">Home</li>
        </Link>
        {!isAuth ? (
          <Link to={RouterPaths.LOGIN}>
            <li className="mr-2 text-2xl text-slate-200">Sign up</li>
          </Link>
        ) : (
          <li
            className="mr-2 text-2xl text-slate-200 cursor-pointer"
            onClick={logOutHandler}
          >
            Log out
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
