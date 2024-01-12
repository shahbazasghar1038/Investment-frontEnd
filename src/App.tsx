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
import { useEffect } from "react";
function App() {
  const userString: string | null = localStorage.getItem("user");
  let user: any;

  if (userString) {
    user = JSON.parse(userString);
  } else {
    console.log("User data not found in localStorage");
  }


  return (
    <>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <BrowserRouter>
        <Nav />
      {user ?
              <AuthRouts />
          :
         
            <GuestRouts />
      }
        {/* <PublicRouts /> */}
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
