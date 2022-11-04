import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContext } from './context/AuthContext';
import { RouterPaths, routes } from './routes';

function App() {
  const { isAuth } = useContext(AuthContext);
  let dependedOnAuthRoutes = routes;

  if (isAuth) {
    dependedOnAuthRoutes = routes.filter(
      (route) => route.path !== RouterPaths.LOGIN
    );
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {dependedOnAuthRoutes.map((route) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
