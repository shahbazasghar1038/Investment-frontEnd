import { BrowserRouter } from "react-router-dom";
// import Sidebar from "@/pages/SideBar";
import { AuthProvider } from "@/context/AuthContext";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import AdminRouts from "./Routs/AdminRouts";
import AuthRouts from "./Routs/AuthRouts";
import GuestRouts from "./Routs/GuestRouts";
import Nav from "./pages/Nav-Footer/Nav";
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
