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
      <div id="Home" className="scroll-mt-20"><HomePage /></div>
      <div id="About" className="scroll-mt-20"><AboutMe /></div>
      <div id="Skills" className="scroll-mt-20"><SkillsSection /></div>
      <div id="Projects" className="scroll-mt-20"><Projects /></div>
      <div id="Experience" className="scroll-mt-20"><Experience /></div>
      <div id="Contact" className="scroll-mt-20"><Footer /></div>
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
