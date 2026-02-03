import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/navbar";
import React from "react";
import Footer from "../components/nav/footer"; 

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      {/* Header */}
        <Navbar />
      {/* Main content */}
      <main className="mt-16 p-6">
        <Outlet />   {/* ✅ child routes render here */}
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
