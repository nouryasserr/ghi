import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../assets/imgs/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = ({ isActive }) =>
    `block py-2 font-medium text-lg text-slate-700 hover:text-black transition-all duration-300 ${
      isActive ? "!font-semibold !text-black" : ""
    }`;

  return (
    <nav
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      } border-t`}
    >
      <div className="container flex items-center justify-between py-3">
        <NavLink to="/home">
          <img className="h-16" src={logo} alt="logo" />
        </NavLink>
        <ul className="hidden md:flex items-center gap-x-7">
          <li>
            <NavLink className={linkClass} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/solutions">
              Solutions
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/technology">
              Technology
            </NavLink>
          </li>
          <li>
            <NavLink className={linkClass} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
        <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
          {open ? "✕" : "☰"}
        </button>
      </div>
      {open && (
        <ul className="md:hidden px-6 pb-4 space-y-3">
          <li onClick={() => setOpen(false)}>
            <NavLink className={linkClass} to="/about">
              About
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink className={linkClass} to="/solutions">
              Solutions
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink className={linkClass} to="/projects">
              Projects
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink className={linkClass} to="/technology">
              Technology
            </NavLink>
          </li>
          <li onClick={() => setOpen(false)}>
            <NavLink className={linkClass} to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
