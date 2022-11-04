import React from 'react';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../routes';

const Navbar = () => {
  return (
    <div className="px-2 py-4 bg-gray-600">
      <ul className="flex items-center">
        <Link to={RouterPaths.HOME}>
          <li className="mr-2 text-2xl text-slate-200">Home</li>
        </Link>
        <Link to={RouterPaths.LOGIN}>
          <li className="mr-2 text-2xl text-slate-200">Login</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
