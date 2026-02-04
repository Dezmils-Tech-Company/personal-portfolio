import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/navbar";
import Footer from "../components/nav/footer";
import ProfileSidebar from "../Layout/ProfileSidebar.jsx"; 
import Hero from "../components/Hero.jsx"; 

const Layout = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-800 border-b border-gray-700 shadow-md">
        <Navbar />
      </header>

      {/* Main layout */}
      <div className="flex flex-1 pt-20">
        {/* Sidebar */}
        <aside
          className="
          ml-2 hidden sm:block sm:w-48 md:w-56 lg:w-64  bg-gray-800 border-r border-gray-700 shadow-lg p-3 md:p-4 sticky top-20 h-[calc(100vh-5rem)] rounded-2xl " >
          <ProfileSidebar />
        </aside>

        {/* Content container */}
        <main
          className="
            flex-1 flex flex-col 
            bg-gray-900 
            p-3 sm:p-4 md:p-6 
            sm:ml-2 md:ml-4 
            rounded-lg shadow-inner
          "
        >
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
          <div className="mt-4 sm:mt-6 border-t border-gray-700 pt-3 sm:pt-4">
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
