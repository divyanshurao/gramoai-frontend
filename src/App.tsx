import React from 'react';
import './App.css'
import { LoadingProvider } from "./contexts/LoadingContex";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./pages/Home";
import InputForm from "./pages/inputForm";
import ContentCalendar from "./pages/contentCalendar";
import LinkedInOAuthHandler from './api/LinkedInOauthHandler';
const App: React.FC = () => {
  return (
    <MantineProvider>
      <LoadingProvider>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/input" element={<InputForm />} />
        <Route path="/calendar" element={<ContentCalendar />} />
        <Route path="/linkedin/callback" element={<LinkedInOAuthHandler />} />
      </Routes>
      </BrowserRouter>
      </LoadingProvider> 
  </MantineProvider>
  );
};


export default App
