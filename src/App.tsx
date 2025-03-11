import React from 'react';
import { LoadingProvider } from "./contexts/LoadingContex";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";
import InputForm from "./pages/inputForm";
import ContentCalendar from "./pages/contentCalendar";
import Humanizer from './pages/humanizer';
import LinkedInConnected from './pages/linkedin-connected';
const App: React.FC = () => {
  return (
    <MantineProvider>
      <LoadingProvider>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputForm />} />
        <Route path="/calendar" element={<ContentCalendar />} />
        <Route path="/humanizer" element={<Humanizer />} />
        <Route path="/linkedin-connected" element={<LinkedInConnected />} />
      </Routes>
      </BrowserRouter>
      </LoadingProvider> 
  </MantineProvider>
  );
};


export default App
