import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/zqx-full.png";
import NavLinks from "../Navbar/NavLinks";

const NavBar = () => {
  const [top, setTop] = useState(!window.scrollY);
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <nav
      className={`fixed top-0 w-full z-[999999] transition duration-300 ease-in-out mb-4 ${
        !top && "bg-white shadow-lg"
      }`}
    >
      <div className="flex flex-row items-center justify-between py-2 px-4"> {/* Adjusted padding */}
        <div className="flex flex-row items-center justify-center font-semibold text-center">
          <div className="app__navbar-logo">
            <Link to="/">
              <img src={logo} alt="logo" className="h-10" /> {/* Adjust logo height */}
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center group">
          <button
            className="p-2 text-blue-900 rounded-lg lg:hidden"
            onClick={handleClick}
          >
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              )}
            </svg>
          </button>
          <div className="hidden p-2 space-x-6 lg:inline-block"> {/* Reduced padding */}
            <NavLinks />
          </div>

          <div
            className={`fixed transition-transform duration-300 ease-in-out flex justify-center left-0 w-full h-auto rounded-md p-4 bg-white lg:hidden shadow-xl top-14 ${
              isOpen ? "block" : "hidden"
            } `}
          >
            <div className="flex flex-col space-y-6">
              <NavLinks />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
