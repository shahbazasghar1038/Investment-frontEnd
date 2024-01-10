import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
// import Sidebar from "@/pages/SideBar";
import CustomerProfile from "@/pages/CustomerProfile";
import Lander from "../pages/Lander";
import SignupPage from "@/pages/SignupPage";
import EmailVarfication from "@/pages/EmailVarfication";
import ComponyDetails from "@/pages/ComponyDetails";
import { Toaster } from "react-hot-toast";
import ResetPassword from "@/pages/ResetPassword";
import ForgotPassword from "@/pages/ForgotPassword";
import Dashboard from "@/pages/Dashboard";
import { AuthProvider } from "@/context/AuthContext";
import Packages from "../pages/Packages";
import Nav from "../pages/Nav-Footer/Nav";
import RedirectRoute from "./RedirectRout";
import { useEffect } from "react";
function PublicRouts() {

    const userString: string | null = localStorage.getItem("user");
    let user: any;

    if (userString) {
        user = JSON.parse(userString);
    } else {
        console.log("User data not found in localStorage");
    }





    return (
        <>
            
            <Routes>
              
                    <Route path="/" element={<Lander />} />
                    <Route path="/plans" element={<Packages />} />               
                    </Routes>
        </>
    );
}

export default PublicRouts;
