import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { CheckCircleIcon } from "lucide-react"
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";

export default function LinkedInConnected() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (token) {
      Cookies.set("auth_token", token, { expires: 7, path: "/" }); // Expires in 7 days
      setTimeout(() => navigate("/onboarding"), 2000); // Delay for UI feedback
    }
  }, [searchParams, navigate]);

  return (
    <>
    <Navbar/>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-6 font-primary">
      <CheckCircleIcon className="w-20 h-20 text-green-500 mb-4" />
      <p className="text-xl font-semibold text-gray-800">Linkedin Authentication Successful</p>
      <p className="text-gray-600 mt-2">Redirecting you to the next step...</p>
    </div>
    <Footer/>
    </>
  );
}
