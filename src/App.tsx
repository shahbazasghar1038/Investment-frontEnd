import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
// import Sidebar from "@/pages/SideBar";
import CustomerProfile from "@/pages/CustomerProfile";
import Lander from "./pages/Lander";
import SignupPage from "@/pages/SignupPage";
import EmailVarfication from "@/pages/EmailVarfication";
import ComponyDetails from "@/pages/ComponyDetails";
import { Toaster } from "react-hot-toast";
import ResetPassword from "@/pages/ResetPassword";
import ForgotPassword from "@/pages/ForgotPassword";
import Dashboard from "@/pages/Dashboard";
import { AuthProvider } from "@/context/AuthContext";
import Packages from "./pages/Packages";
import Nav from "./pages/Nav-Footer/Nav";
function App() {
  return (
    <>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <BrowserRouter>
          {/* <Sidebar /> */}
          <Nav/>
          <Routes>
          <Route path="/" element={<Lander />} />
          <Route path="/plans" element={<Packages />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="customerprofile" element={<CustomerProfile />} />
            <Route path="emailvarfication" element={<EmailVarfication />} />
            <Route path="componydetails" element={<ComponyDetails />} />
            <Route path="forgotpassword" element={<ForgotPassword />} />
            <Route path="resetpassword" element={<ResetPassword />} />
            <Route path="dashboard/*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
