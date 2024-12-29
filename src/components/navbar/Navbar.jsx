import React from "react";
import Logo from "../../assets/images/Logo.png";
import NavLink from "./NavLink";

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
            <NavLink id="home" label="Home" scrollToSection={scrollToSection} />
          </li>
          <li>
            <NavLink
              id="about"
              label="About"
              scrollToSection={scrollToSection}
            />
          </li>
          <li>
            <NavLink
              id="services"
              label="Services"
              scrollToSection={scrollToSection}
            />
          </li>
          <li>
            <NavLink label="Our Customer" />
          </li>
          <li>
            <NavLink label="Team" />
          </li>
          <li>
            <NavLink label="Career" />
          </li>
          <li>
            <NavLink
              label="Contact"
              id={"contact"}
              scrollToSection={scrollToSection}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
