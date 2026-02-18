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
        <NavLink to="/">
          <img className="h-16" src={logo} alt="logo" />
        </NavLink>
        <ul className="hidden md:flex items-center gap-x-7">
          <li>
            <NavLink className={linkClass} to="/about">
              About
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink className={linkClass} to="/solutions">
              Solutions
            </NavLink>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
              <div className="bg-white shadow-xl rounded-xl p-8 w-[900px]">
                <div className="grid grid-cols-5 gap-6">
                  <div>
                    <NavLink
                      to="/wallformwork"
                      className="font-semibold block mb-3 text-primary-600"
                    >
                      Wall Formwork
                    </NavLink>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>Flex 50</li>
                      <li>TriTec</li>
                      <li>Brace Frames</li>
                      <li>Customized Solutions</li>
                    </ul>
                  </div>
                  <div>
                    <NavLink
                      to="/columnformwork"
                      className="font-semibold block mb-3 text-primary-600"
                    >
                      Column Formwork
                    </NavLink>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>Flex 50 Column</li>
                      <li>TriTec Column</li>
                      <li>Circular Columns</li>
                      <li>Special Shapes</li>
                    </ul>
                  </div>
                  <div>
                    <NavLink
                      to="/climbingsystems"
                      className="font-semibold block mb-3 text-primary-600"
                    >
                      Climbing Systems
                    </NavLink>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>CS Climbing</li>
                      <li>Shaft Platform</li>
                      <li>Safety Systems</li>
                      <li>Hydraulic Climbing</li>
                    </ul>
                  </div>
                  <div>
                    <NavLink
                      to="/shoringsystems"
                      className="font-semibold block mb-3 text-primary-600"
                    >
                      Shoring Systems
                    </NavLink>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>D15 Shoring</li>
                      <li>D50 Heavy Duty</li>
                      <li>Modular Scaffolding</li>
                      <li>Load Towers</li>
                    </ul>
                  </div>
                  <div>
                    <NavLink
                      to="/slabsupport"
                      className="font-semibold block mb-3 text-primary-600"
                    >
                      Slab Support
                    </NavLink>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li>Table Form</li>
                      <li>Flex Deck</li>
                      <li>Multiflex</li>
                      <li>Top Deck</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
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
