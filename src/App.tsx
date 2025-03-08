import React from 'react';
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";
import InputForm from "./pages/inputForm";

const App: React.FC = () => {
  return (
    <MantineProvider>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputForm />} />
      </Routes>
      </BrowserRouter>
  </MantineProvider>
  );
};


export default App
