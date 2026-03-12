import React, { Suspense, lazy } from 'react'
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/homePage";
import AboutMe from "./components/about";
import SkillsSection from "./components/Skill";
import SmoothScroll from "./components/SmoothScroll";
import Spotlight from "./components/Spotlight";
import CustomCursor from "./components/CustomCursor";

const Projects = lazy(() => import("./components/Projects"));
const Experience = lazy(() => import("./components/Experience"));
const Footer = lazy(() => import("./components/Footer"));
const ProjectDetailsPage = lazy(() => import("./components/ProjectDetailsPage"));

function PortfolioLanding() {
  return (
    <>
      <Navbar />
      <div id="Home"><HomePage /></div>
      <div id="About"><AboutMe /></div>
      <div id="Skills"><SkillsSection /></div>
      <div id="Projects"><Projects /></div>
      <div id="Experience"><Experience /></div>
      <div id="Contact"><Footer /></div>
    </>
  );
}

function App() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#120032]" />}>
      <SmoothScroll>
        <div className="overflow-x-hidden font-sans antialiased selection:bg-blue-500/30">
          <Spotlight />
          <CustomCursor />
          <Routes>
            <Route path="/" element={<PortfolioLanding />} />
            <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </SmoothScroll>
    </Suspense>
  )
}

export default App
