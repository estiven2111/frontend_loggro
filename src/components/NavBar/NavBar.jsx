// import { useState } from "react";
// import { Link } from "react-scroll";
// import { CiMenuFries } from "react-icons/ci";
// import { FaTimes } from "react-icons/fa";

// function NavBar() {
//   const [click, setClick] = useState(false);

//   const handlerClick = () => {
//     setClick(!click);
//   };
//   const content = (
//     <>
//       <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
//         <ul className="text-center text-xl p-20">
//           <Link spy={true} smooth={true} to="">
//             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
//               home
//             </li>
//           </Link>
//           <Link spy={true} smooth={true} to="">
//             <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
//               dashboard
//             </li>
//           </Link>
//         </ul>
//       </div>
//     </>
//   );
//   return (
//     <div className="bg-slate-900">
//       <nav>
//         <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4">
//           <div className="flex items-center flex-1">
//             <span className="text-3xl font-bold">Logo</span>
//           </div>
//           <div className="lg:flex md:flex lg: flex-1 itmes center justify-end font-normal hidden">
//             <div className="flex-10">
//               <ul className=" flex gap-8 mr-16 text-[18]">
//                 <Link spy={true} smooth={true} to="">
//                   <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
//                     home
//                   </li>
//                 </Link>
//                 <Link spy={true} smooth={true} to="">
//                   {/* <AiFillAlert/>  */}
//                   <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer">
//                     {" "}
//                     dashboard
//                   </li>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//           <div>{click && content}</div>
//           <button className="block sm:hidden transition" onClick={handlerClick}>
//             {click ? <FaTimes /> : <CiMenuFries />}
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default NavBar;



import { useState } from "react";
import { Link } from "react-router-dom";
import loggro from "../../assets/loggro.png"
import { MdPayment, MdOutlineLiveHelp, MdLogin } from "react-icons/md";
import { TbForms } from "react-icons/tb";
import { SlBadge } from "react-icons/sl";
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
              <TbForms /> Subir Imagen
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
              <SlBadge />
              Listado Imagenes
            </div>
          </NavLink>
          
        </div>
      )}
    </div>
  );
};

export default NavBar;

