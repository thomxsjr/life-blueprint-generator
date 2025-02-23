import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import { useEffect } from 'react';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';


function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);



  useEffect(() => {
    const fetchUser = async () => {

      if(!currentUser){
        navigate("/signin");
        return; 
      }
    };
    fetchUser();
  }, [currentUser, navigate]);

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