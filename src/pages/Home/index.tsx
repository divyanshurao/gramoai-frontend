import React from "react";
import Navbar from "./../../components/navbar";
import { useNavigate } from "react-router-dom";
import { initiateLinkedInOAuth } from "./../../api/linkedinOauth";
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 md:pt-32 pb-20">
        <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-800 mt-16 mb-8">
            Get a content calendar tailored for your LinkedIn audience.
          </h1>
          <button
              onClick={initiateLinkedInOAuth}
              className="bg-[#121826] text-white px-8 py-2 rounded-md text-base"
            >
              Get Started
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
