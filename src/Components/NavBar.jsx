import { Menu, LogOut } from "lucide-react";
import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Navbar = ({ toggleSidebar }) => {
  return (
    <div className="bg-white p-2 flex justify-between items-center border-b-2 h-12">
      {/* Logo and Menu Button */}
      <div id="logo_brand" className="flex items-center">
        <button
          className="mr-2 p-1 hover:bg-gray-200 rounded-md focus:outline-none"
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      {/* Logout */}
      <div className="flex items-center">
        <Link to="/" className="p-1 hover:bg-gray-200 rounded-md focus:outline-none">
          <LogOut className="h-6 w-6 text-gray-700" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
