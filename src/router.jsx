import { createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./pages/Home";
import About from "./pages/About.jsx"
import Blog from "./pages/Blog.jsx";
import Projects from "./pages/Projects.jsx";
import Repos from "./pages/Repos.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import PrivacyPolicy from "./components/Legal/PrivacyPolicy.jsx"
import TermsAndConditions from "./components/Legal/TermsAndConditions.jsx";
import Resume from "./pages/resume/Resume.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: <Home /> },   // default route
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "projects", element: <Projects /> },
      { path: "repositories", element: <Repos /> },
      { path: "skills", element: <Skills /> },
      { path: "contact", element: <Contact /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "terms-and-conditions", element: <TermsAndConditions /> },
      { path: "resume", element: <Resume /> }
    ],
  },
]);
