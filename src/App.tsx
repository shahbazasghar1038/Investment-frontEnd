import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import AuthRouts from "./Routs/AuthRouts";
import GuestRouts from "./Routs/GuestRouts";
import PublicRouts from "./Routs/PublicRouts";
import { useEffect, useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRouts from "./Routs/AdminRouts";
import { Box } from "@mui/material";
import ProgressCircularCustomization from "./pages/dasboard/users/ProgressCircularCustomization";

interface User {
  role: number;
}
function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous function to check if user is stored
    const checkUserStorage = async () => {
      // Your logic to check if user is stored, for example, fetching from an API
      // Replace the setTimeout with your actual logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating async delay

      // For demonstration purposes, let's assume the user is stored in local storage
      const storedUser = localStorage.getItem('user');

      // Update the user state and loading state
      setUser(storedUser ? JSON.parse(storedUser) : null);
      setIsLoading(false);
    };

    checkUserStorage();
  }, []); // Run this effect only once when the component mounts

  console.log('user : ', user)

  return (
    <>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <BrowserRouter>
          <Nav />

          <>
            {isLoading ? (
              <Box sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                background: '#030239',
                position: 'fixed',
                inset: 0,
                height: "100vh",
              }}>
                <ProgressCircularCustomization />
              </Box>
            ) : user ? (
              <>
                {user?.role > 1 ?
                  <AdminRouts />
                  :
                  <AuthRouts />
                }
              </>
            ) : (
              <GuestRouts />
            )}
          </>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
