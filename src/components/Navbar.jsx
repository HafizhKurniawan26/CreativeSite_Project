import React from "react";
import Logo from "../assets/images/Logo.png";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <nav className="flex justify-between my-6">
      <a href="" className="flex items-center gap-2">
        <img src={Logo} alt="Logo" className="h-8" />
        <h1 className="text-xl font-semibold">
          Creative<span className="text-blue-700">Site</span>
        </h1>
      </a>
      <div>
        <ul className="flex gap-8">
          <li>
            <a
              href=""
              className="hover:underline hover:underline-offset-4 hover:text-blue-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline hover:underline-offset-4 hover:text-blue-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:underline hover:underline-offset-4 hover:text-blue-800"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("services");
              }}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:underline hover:underline-offset-4 hover:text-blue-800"
            >
              Our Customer
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:underline hover:underline-offset-4 hover:text-blue-800"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:underline hover:underline-offset-4 hover:text-blue-800"
            >
              Career
            </a>
          </li>
          <li>
            <a
              href=""
              className="hover:underline hover:underline-offset-4 hover:text-blue-800"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
