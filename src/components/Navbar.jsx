import { FaRegWindowClose } from "react-icons/fa";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
const Navbar = ({ menuOpened, toggleMenu, containerStyles }) => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/math", label: "Sessions" },
    { to: "/sat", label: "SAT Strategy" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`${containerStyles} flex justify-center items-center w-full gap-y-8 xl:gap-x-10`}
    >
      {" "}
      {menuOpened && (
        <>
          <FaRegWindowClose
            onClick={toggleMenu}
            className="text-xl self-end cursor-pointer relative left-8"
          />
          <Logo />
        </>
      )}
      {navItems.map(({ to, label }) => (
        <div key={label} className="inline-flex nav-link">
          <NavLink
            to={to}
            className={({ isActive }) => (isActive ? "active-link" : "")}
          >
            <h5 className="medium-18">{label}</h5>
          </NavLink>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
