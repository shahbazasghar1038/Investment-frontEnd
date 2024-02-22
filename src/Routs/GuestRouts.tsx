import LoginPage from "@/pages/LoginPage";
import { Route, Routes } from "react-router-dom";
// import Sidebar from "@/pages/SideBar";
import AboutUs from "@/pages/AboutUs";
import ComponyDetails from "@/pages/ComponyDetails";
import ContactUs from "@/pages/ContactUs";
import CustomerProfile from "@/pages/CustomerProfile";
import EmailVarfication from "@/pages/EmailVarfication";
import ForgotPassword from "@/pages/ForgotPassword";
import ResetPassword from "@/pages/ResetPassword";
import SignupPage from "@/pages/SignupPage";
import TnC from "@/pages/TnC";
import Lander from "../pages/Lander";
import Packages from "../pages/Packages";
import RedirectRoute from "./RedirectRout";
function GuestRouts() {

    const userString: string | null = localStorage.getItem("user");
    let user: any;

    if (userString) {
        user = JSON.parse(userString);
    } else {
        console.log("Please Login ");
    }

    return (
        <>
            <Routes>
                <Route path="/" element={<Lander />} />
                <Route path="/plans" element={<Packages />} />
                <Route path="/terms-of-services" element={<TnC />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />

                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="customerprofile" element={<CustomerProfile />} />
                <Route path="emailvarfication" element={<EmailVarfication />} />
                <Route path="componydetails" element={<ComponyDetails />} />
                <Route path="forgotpassword" element={<ForgotPassword />} />
                <Route path="resetpassword" element={<ResetPassword />} />
                <Route path="/*" element={<RedirectRoute to="/" />} />

            </Routes>
        </>
    );
}

export default GuestRouts;
