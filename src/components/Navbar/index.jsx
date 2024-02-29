import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Image/DS logo.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import useMediaQuery from "../../hooks/useMediaQuery";
import NavMenu from "../../data/navMenu.json";
import "../../css/index.css";
import Dropdown from "../Dropdown/dropdown";

const menuItems = NavMenu;

const Navbar = () => {
  const activeLink = "text-lightPurple border-b-[3px] border-lightPurple pb-3";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* navbar */}
      <nav
        className={`sticky top-0 bg-[#fff] ${
          isScrolled ? "shadow-lg" : ""
        } z-50`}
      >
        <div className="flex justify-between items-center w-full px-4 h-[95px]">
          <div>
            <img src={Logo} alt="logo" />
          </div>
          <div className="space-x-8 text-dark md:block hidden">
            <ul className="flex gap-[28px] text-[1rem] font-[700] text-dark">
              {menuItems.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.route}
                    className={({ isActive }) =>
                      isActive ? `${activeLink}` : "NavStyle"
                    }
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
              <li>
                <Dropdown />
              </li>
            </ul>
          </div>
          <div>
            <button id="whatsapp-button" className="flex items-center">
              <FaWhatsapp /> +1 516 231 1313
            </button>
          </div>
          <div className="md:hidden">
            <FaBarsStaggered
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="text-warning text-[1.8rem]"
            />
          </div>
        </div>
        {/* mobile menu modal */}
        <div>
          {!isAboveMediumScreen && (
            <div
              className={`fixed right-0 bottom-0 z-40 h-full w-[300px] bg-light drop-shadow-xl ${
                isMenuToggled ? "slideIn" : "slideOut"
              }`}
            >
              {/* close icon */}
              <div className="flex justify-end p-12">
                <button
                  onClick={() => setIsMenuToggled(false)}
                  className="border-2 border-warning rounded-full p-2"
                >
                  <RxCross2 className="h-6 w-6 text-warning font-semibold" />
                </button>
              </div>
              {/* menu item */}
              <div className="ml-10 z-50 flex flex-col gap-8 text-[18px] font-semibold">
                {menuItems.map((link, index) => (
                  <div key={index} className="leading-3">
                    <NavLink
                      to={link.route}
                      className={({ isActive }) =>
                        isActive ? `${activeLink}` : "hover:text-lightPurple"
                      }
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      {link.text}
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
