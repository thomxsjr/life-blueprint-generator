import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Welcome from './pages/Welcome';
import PageNotFound from "./pages/PageNotFound";
import UserMetrics from './pages/UserMetrics';
import PropTypes from "prop-types";
import { useSelector } from 'react-redux';


function ProtectedRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);

  if (currentUser === undefined || currentUser === null) {
    return <Navigate to="/signin" replace />
  }

  return <>{children}</>;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

function CheckUserMetricsComplete({ children }) {
  const { currentUser } = useSelector((state) => state.user)
  const { currentUserMetrics } = useSelector((state) => state.userMetrics);

  if (currentUser === undefined || currentUser === null) {
    return <Navigate to="/signin" replace />
  }

  if (currentUserMetrics === null || currentUserMetrics === undefined) {
    return <Navigate to="/user-metrics" replace />;
  }

  return <>{children}</>;
}

CheckUserMetricsComplete.propTypes = {
  children: PropTypes.node.isRequired,
};

function RedirectRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);

  if(currentUser != null){
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
}

RedirectRoute.propTypes = {
  children: PropTypes.node.isRequired,
};


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <RedirectRoute>
            <Welcome />
          </RedirectRoute>
        } />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/dashboard' element={
          <ProtectedRoute>
            <CheckUserMetricsComplete>
              <Dashboard />
            </CheckUserMetricsComplete>
          </ProtectedRoute>
        } />
        <Route path='/user-metrics' element={
          <ProtectedRoute>
            <UserMetrics />
          </ProtectedRoute>
          } />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}