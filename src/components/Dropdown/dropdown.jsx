import { useState } from 'react';
import { NavLink } from "react-router-dom";

const DropdownMenu = [
    {
      menu: "Home",
      route: "/",
    },
    {
      menu: "Events",
      route: "/event",
    },
    {
      menu: "Events Details",
      route: "/event",
    },
    {
      menu: "Teachers",
      route: "/teachers",
    },
    {
      menu: "Teachers Details",
      route: "/teachers",
    },
    {
      menu: "Classes",
      route: "/classes",
    },
    {
      menu: " Classes Details",
      route: "/classes",
    },
    {
      menu: "About",
      route: "/aboutUs",
    },
    {
      menu: "Contact",
      route: "/contact",
    },
    {
      menu: "Error",
      route: "/error",
    },
  ];

  function Dropdown() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    let timeoutId;
  
    const handleMouseEnter = () => {
      clearTimeout(timeoutId); // Clear any existing timeout
      setIsDropdownVisible(true);
    };
  
    const handleMouseLeave = () => {
      clearTimeout(timeoutId); // Clear any existing timeout
      timeoutId = setTimeout(() => {
        setIsDropdownVisible(false);
      }, 300); // Set a delay of 300 milliseconds (adjust as needed)
    };

    const handleClick = () => {
      setIsDropdownVisible(!isDropdownVisible);
    };

    const isSmallScreen = window.innerWidth < 768;
    const isLargeScreen = window.innerWidth > 768;
  
    return (
      <div className="relative">
        <div
          className="dropdown-container"
          onMouseEnter={isLargeScreen ? handleMouseEnter : null}
          onMouseLeave={isLargeScreen ? handleMouseLeave : null}
        >
          <NavLink className="NavStyle" onClick={isSmallScreen ? handleClick : null}>Pages</NavLink>
          <div
            className={`absolute bg-white p-4 w-[180px] mt-4 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ${
              isDropdownVisible ? "visible dropdownIn" : "hidden"
            }`}
            style={{ opacity: isDropdownVisible ? 1 : 0 }}
          >
            {DropdownMenu.map((item, index) => (
              <NavLink
                key={index}
                to={item.route}
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: "smooth" })
                }
              >
                <ul>
                  <li className="hover:text-lightPurple">{item.menu}</li>
                </ul>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  }
  

export default Dropdown;
