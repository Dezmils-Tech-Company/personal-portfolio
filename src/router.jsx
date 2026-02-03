import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Layout/MainLayout.jsx";
import Home from "./pages/Home";
import About from "./pages/About.jsx"
import Blog from "./pages/Blog.jsx";
import Projects from "./pages/Projects.jsx";
import Repos from "./pages/Repos.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },   // default route
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "projects", element: <Projects /> },
      { path: "repositories", element: <Repos /> },
    ],
  },
]);
