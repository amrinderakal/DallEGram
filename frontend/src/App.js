
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import CreateUser from "./pages/auth/CreateUser"
import ForgotPassword from './pages/auth/ForgotPassword';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import PrivateRoute from './pages/auth/PrivateRoute';
import { AuthProvider } from "./context/AuthContext";
import { DatabaseProvider } from './context/DatabaseContext';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <AuthProvider>
      <DatabaseProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute />} />
           <Route path="/login" element={<LoginPage/>} />
          <Route path="/create-user" element={<CreateUser/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
        </DatabaseProvider>
        </AuthProvider>
      </Router>
  );
}

export default App;
