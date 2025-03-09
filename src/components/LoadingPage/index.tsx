import React from "react";
import { Progress } from "@mantine/core"; // Mantine Progress component
import Navbar from "./../navbar";

interface LoadingPageProps {
  message?: string;
  progress?: number;
}

const LoadingPage = ({ 
  message = "Generating your content calendar...", 
  progress = 60 
}: LoadingPageProps) => {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen pt-16">
        <div className="w-full max-w-md px-4">
          <Progress value={progress} size="sm" className="mb-4" /> {/* Mantine Progress */}
          <p className="text-center text-gray-600">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
