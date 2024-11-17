import { UserCheck, Store, Lock, UserCircle, ListOrdered , Map, SquarePlus} from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div
        id="title"
        className=" p-2 flex flex-col gap-2 justify-center items-center mt-3"
      >
        <span className="font-medium text-xl capitalize"> FinancifAI</span>
      </div>

      <div id="link" className="mt-6 p-2 space-y-3">
        <Link to="/" className="flex items-center  hover:text-blue-600">
          <Store size={21} className="inline-block mr-1" />
          Home
        </Link>
        <Link to="/dashboard/projects" className="flex items-center  hover:text-blue-600">
          <Map size={21} className="inline-block mr-1" />
        My Projects
        </Link>

        <Link to="/dashboard/new-projects" className="flex items-center  hover:text-blue-600">
          <SquarePlus size={21} className="inline-block mr-1" />
           Explore New Projects
        </Link>
        
      </div>
    </div>
  );
};

export default Sidebar;
