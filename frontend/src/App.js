
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import CreateUser from './pages/CreateUser';
import ForgotPassword from './pages/ForgotPassword';
import { AuthProvider } from "./context/AuthContext";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
        <AuthProvider>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/create-user" element={<CreateUser/>} />
          <Route path="/forgot-password" element={<ForgotPassword/>} />
        </Routes>
        </AuthProvider>
      </Router>
  );
}

export default App;
