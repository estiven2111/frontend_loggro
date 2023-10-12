
import { useState } from "react";
import { Link } from "react-router-dom";
import loggro from "../../assets/loggro.png"
import { AiOutlineUpload } from "react-icons/ai";
import { FaListOl } from "react-icons/fa6";
import { VscChromeClose } from "react-icons/vsc";
import { IoMenuSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  let activeStyle = {
    fontWeight: "bold",
    // color: "#0055fb",
    paddingBottom: "2px", // Add padding to create space for the border
    borderBottom: "2px solid ",
  };

  // eslint-disable-next-line no-unused-vars
  let activeClassName = "underline";


  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="lg:px-20 bg-primaryblue/80 transition-colors z-20 duration-500 dark:bg-darkblue fixed top-0 left-0 w-full bg-black mb-7">
      <div className="px-5">
        <div className="flex justify-between items-center h-[90px] ">
          <div className="flex gap-6 grid grid-cols-3 w-full  text-white items-center relative">
            {/* Menu toggle button for medium and small screens */}
            {/* <div className=" md:col-span-2 text-white flex items-center"> */}
            <div className="  text-white flex items-center">
              <button
                className={`lg:hidden block text-white text-xl transition-transform duration-200 ease-in-out focus:outline-none ${
                  showMenu ? "rotate-90" : "rotate-0"
                }`}
                onClick={toggleMenu}
              >
                {showMenu ? (
                  <VscChromeClose className="text-3xl" />
                ) : (
                  <IoMenuSharp className="text-4xl" />
                )}
              </button>
              <div className="hidden gap-5 lg:flex lg:col-span-2 ">
                <NavLink
                  to="/"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <div className="cursor-pointer  hover:scale-105 duration-200 md:text-lg text-md font-medium">
                    Subir Imagen
                  </div>
                </NavLink>
                <NavLink
                  to="/dashboard"
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                >
                  <div className="cursor-pointer  hover:scale-105 duration-200 md:text-lg text-md font-medium">
                    Listado Imagenes
                  </div>
                </NavLink>
              </div>
            </div>

            <div className="flex items-center justify-center text-white">
              <Link to="/">
               
               <img
                  className="duration-200 w-52   rounded-full"
                  src={loggro}
                  alt="logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Menu content for medium and small screens */}
      {showMenu && (
        // <div className="bg-slate-50 dark:bg-slate-950 py-3 px-5 mt-3 dark:shadow-neutral-700 shadow-md text-black dark:text-white">

        <div
          className={`lg:hidden bg-slate-50 dark:bg-slate-950 py-3 px-5 mt-[0.5px] dark:shadow-neutral-700 shadow-md w-full text-black dark:text-white absolute ${
            showMenu
              ? "opacity-100 max-h-full transition-all duration-300 ease-in-out"
              : "opacity-0 max-h-0"
          }`}
          style={{
            maxHeight: showMenu ? "500px" : "0",
            visibility: showMenu ? "visible" : "hidden",
          }}
        >
          
         
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div
              className="flex pl-5 gap-3 items-center mb-2 hover:text-lightblueone cursor-pointer"
              onClick={toggleMenu}
            >
              <AiOutlineUpload /> Subir Imagen
            </div>
          </NavLink>
          <NavLink
            to="/dashboard"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            <div
              className="flex pl-5 gap-3 items-center mb-2 hover:text-lightblueone cursor-pointer"
              onClick={toggleMenu}
            >
              <FaListOl />
              Listado Imagenes
            </div>
          </NavLink>
          
        </div>
      )}
    </div>
  );
};

export default NavBar;

