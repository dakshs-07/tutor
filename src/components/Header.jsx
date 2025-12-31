import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpened((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/60 backdrop-blur-md shadow-sm border-b border-white/20"
            : "bg-transparent border-b-2"
        }
      `}
    >
      <div className="flex items-center justify-between py-10 px-10">
        <Navbar
          menuOpened={menuOpened}
          toggleMenu={toggleMenu}
          containerStyles={
            menuOpened
              ? "flex flex-col gap-y-12 h-screen w-[222px] absolute left-0 top-0 bg-deep z-50 px-10 py-5 shadow-2xl"
              : "hidden xl:flex gap-x-5 xl:gap-x-12 medium-15 px-2 py-1"
          }
        />
      </div>
    </header>
  );
};

export default Header;
