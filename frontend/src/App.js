
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateUser from './pages/CreateUser';
import ForgotPassword from './pages/ForgotPassword';
import Homepage from './pages/Homepage';
import Profile from './pages/Profile';
import { AuthProvider } from "./context/AuthContext";
import { DatabaseProvider } from './context/DatabaseContext';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
      <DatabaseProvider>
        <AuthProvider>
        <Route path="/" element={<LoginPage/>} />
          <Route path="/create-user" element={<CreateUser/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
          <Route path="/homepage" element={<Homepage/>} />
          <Route path="/profile" element={<Profile/>} />
        </AuthProvider>
        </DatabaseProvider>
      </Router>
  );
}

export default App;
