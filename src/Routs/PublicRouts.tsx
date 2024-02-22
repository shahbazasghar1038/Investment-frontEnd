import { Route, Routes } from "react-router-dom";
// import Sidebar from "@/pages/SideBar";
import Lander from "../pages/Lander";
import Packages from "../pages/Packages";
function PublicRouts() {




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
