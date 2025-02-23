import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';


function ProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);

  if (currentUser === undefined) {
    return <Navigate to="/signin" replace />;
  }
    if(currentUser === null){
      return <Navigate to="/signin" replace />;
    }

  return <>{children}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
}