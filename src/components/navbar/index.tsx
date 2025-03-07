import React, { useState } from "react";
import logo from "./../../assets/logo.png";


const Navbar: React.FC = () => {
  return (
    <div className="flex justify-end items-start p-2 mb-1 bg-[#5753F2] border w-full h-28">
        <img src={logo} alt="Image" className="h-24 w-24 absolute left-10 top-2" />
    </div>
  );
};

export default Navbar;