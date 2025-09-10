const NavLink = ({ id, label, scrollToSection }) => {
  const handleClick = (e) => {
    e.preventDefault();
    if (scrollToSection && id) {
      scrollToSection(id);
    }
  };

  return (
    <a
      href={`#${id || ""}`}
      className="hover:underline hover:underline-offset-4 hover:text-blue-800"
      onClick={handleClick}
    >
      {label}
    </a>
  );
};

export default NavLink;
