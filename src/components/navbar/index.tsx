import React, { useState, useEffect } from "react";
import { Linkedin, User } from "lucide-react";
import Cookies from "js-cookie";
import { initiateLinkedInOAuth } from "../../api/linkedinOauth"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";

interface UserData {
  name: string;
  // Add other properties as needed
}

const Navbar: React.FC = () => {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) {
      try {
        const decoded = JSON.parse(atob(token.split(".")[1])); // Decode JWT
        setUserData(decoded.user);
      } catch (error) {
        console.error("Failed to decode auth token", error);
      }
    }
  }, []);

  const navigate = useNavigate()

  const handleLinkedinConnect = async () => {
    const url = await initiateLinkedInOAuth();
    window.open(url, "_blank");
  };

  const handleLProfile = async () => {
    navigate("/calendar")
  };

  return (
    <div>
      <nav className="bg-white py-4 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <a href="/">
              <div className="flex items-center">
                <h1 className="text-2xl font-bold font-primary text-[#5753f2]">gramo.ai</h1>
              </div>
            </a>
            <div className="flex items-center space-x-4">
              {userData ? (
                <button onClick={handleLProfile}
                 className="flex items-center px-4 py-3 text-base font-medium rounded-lg text-white bg-[#5753f2] hover:bg-[#4542e0] transition-colors">
                  <User size={20} fill="white" className="mr-1" />
                  {userData.name}
                </button>
              ) : (
                <button
                  onClick={handleLinkedinConnect}
                  className="flex px-6 py-3 text-base font-medium rounded-lg text-white bg-[#5753f2] hover:bg-[#4542e0] transition-colors"
                >
                  <Linkedin size={20} fill="white" className="mr-4" />
                  Connect Linkedin
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
