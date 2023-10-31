import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import CreateUser from "./pages/auth/CreateUser";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Homepage from "./pages/Homepage";
import Profile from "./pages/Profile";
import AccountCreated from "./pages/auth/AccountCreated";
import PrivateRoute from "./pages/auth/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { DatabaseProvider } from "./context/DatabaseContext";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <Router>
      <DatabaseProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<PrivateRoute />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/create-user" element={<CreateUser />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/account-created" element={<AccountCreated />} />
          </Routes>
        </AuthProvider>
      </DatabaseProvider>
    </Router>
  );
}

export default App;
