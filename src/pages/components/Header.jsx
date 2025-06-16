import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion"; // Corrected import
import logo from "../../assets/images/digitalpathsalalogo.png";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navbar_links = [
    { name: "Home", link: "/home" },
    { name: "Courses", link: "/courses" },
    { name: "Certification", link: "/certification" },
    {name:"Notices",link:"/notices"},
    {name:"Assignment",link:"/assignment"},
  ];

  const handleNavbarToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleClose = () => {
    setIsNavOpen(false);
  };

  return (
    <div className="relative z-50">
      {/* Header bar */}
      <div className="bg-[#4CAF50] p-4 flex justify-between items-center text-white">
        <div className="flex items-center gap-4 cursor-pointer" onClick={handleNavbarToggle}>
          <GiHamburgerMenu className="text-3xl" />
          <h1 className="text-2xl">Logo</h1>
        </div>
        <h1 className="text-xl">DIGITAL PATHSALA</h1>
        <Link className="text-xl">Logout</Link>
      </div>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/30 z-40"
            onClick={handleClose} 
          />
        )}
      </AnimatePresence>

      {/* Sidebar menu */}
      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 w-[230px] h-screen bg-[#4CAF50] shadow-lg p-4 z-50"
          >
            <IoIosCloseCircleOutline className="text-3xl cursor-pointer" onClick={handleClose} />
            <ul className="flex flex-col space-y-4 items-center mt-4">
              <img src={logo} className="w-[100px]" alt="logo" />
              <hr className="border w-full" />
              {navbar_links.map((item, index) => (
                <li key={index} className="text-white text-lg font-medium">
                  <Link to={item.link} onClick={handleClose}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
