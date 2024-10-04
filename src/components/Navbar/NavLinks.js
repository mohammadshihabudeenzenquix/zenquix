import React, { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      {["home", "about", "services", "contact"].map((item, index) => (
        <HashLink
        smooth
          to={`${item == "contact" ? "/contact" :`/#${item}`}`}
          key={item + index}
          className={`${active === item ? 'inline-flex items-center justify-center w-auto px-6 py-3 text-white bg-blue-900 shadow-xl hover:bg-blue-800 rounded-xl' : 'px-4 font-extrabold text-gray-500 hover:text-blue-900'}`}
          onClick={() => setActive(item)}
        >
            {item}
        </HashLink>
      ))}
    </>
  );
};

export default NavLinks;
