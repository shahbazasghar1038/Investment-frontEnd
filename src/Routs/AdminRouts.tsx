import { Route, Routes } from "react-router-dom";
// import Sidebar from "@/pages/SideBar";
import AboutUs from "@/pages/AboutUs";
import AdminDashboard from "@/pages/AdminDashboard";
import ContactUs from "@/pages/ContactUs";
import Lander from "@/pages/Lander";
import TnC from "@/pages/TnC";
import Packages from "../pages/Packages";
import RedirectRoute from "./RedirectRout";
function AdminRouts() {


    return (
        <>

            <Routes>

                <Route path="/" element={<Lander />} />
                <Route path="/plans" element={<Packages />} />
                <Route path="dashboard/*" element={<AdminDashboard />} />
                <Route path="/terms-of-services" element={<TnC />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/*" element={<RedirectRoute to="/dashboard" />} />


            </Routes>


        </>
    );
}

export default AdminRouts;
