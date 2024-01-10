import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RedirectRoute({to}: any) {

    const navigate = useNavigate();

    // Retrieve user data from localStorage
const userString: string | null = localStorage.getItem("user");
let user: any;
 
if (userString) { 
  user = JSON.parse(userString);  
} else {
  console.log("User data not found in localStorage");
}

    useEffect(() => {
            navigate(to);
    }, [])

    return (
        <>
        </>
    );
}
