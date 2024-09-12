import React from 'react';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="inline-flex items-center justify-center w-auto px-6 py-3 text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-xl" smooth to="#hero">
                Home
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#about">
                About
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#services">
                Services
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" smooth to="/#partner">
                Partners
            </HashLink>
            <HashLink className="px-4 font-extrabold text-gray-500 hover:text-blue-900" to="/contact#contact">
                Contact Us
            </HashLink>
        </>
    )
}

export default NavLinks;
