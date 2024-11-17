import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Components/NavBar";
import Sidebar from "../Components/SideBar";

const ClientLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="h-screen flex flex-col md:flex-row">
      {/* Sidebar */}
      <div
        id="left-part"
        className={`bg-white border-r-2 md:basis-[15rem] ${
          isSidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div id="right-part" className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="shadow-md">
          <Navbar toggleSidebar={toggleSidebar} />
        </div>

        {/* Page Content */}
        <div className="p-4 flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientLayout;