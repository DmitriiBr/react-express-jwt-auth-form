import { Navigate } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';

export enum RouterPaths {
  HOME = '/',
  LOGIN = '/login',
  REDIRECT = '*',
}

export const routes = [
  { path: RouterPaths.HOME, element: <Home /> },
  { path: RouterPaths.LOGIN, element: <Login /> },
  { path: RouterPaths.REDIRECT, element: <Navigate to={'/'} /> },
];
