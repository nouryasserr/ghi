import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="py-10 mt-14 lg:mt-28 bg-slate-100">
        <div className="container flex items-center justify-center sm:justify-between flex-wrap gap-4 space-y-2 sm:space-y-4">
          <div className="md:w-2/5 lg:w-1/4">
            <h4 className="text-2xl text-primary-900 text-center sm:text-left mb-2">
              GHI FORMWORK
            </h4>
            <p className="text-slate-700 text-center sm:text-left text-sm sm:text-base">
              Engineering tomorrow's skylines with German precision and global
              expertise
            </p>
          </div>
          <ul className="flex gap-2 flex-wrap md:gap-10 items-center justify-center px-4 py-2 rounded-sm">
            <li>
              <NavLink
                to={"/about"}
                className={
                  "text-lg font-semibold hover:underline transition-all duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/solutions"}
                className={
                  "text-lg font-semibold hover:underline transition-all duration-300"
                }
              >
                Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/projects"}
                className={
                  "text-lg font-semibold hover:underline transition-all duration-300"
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/technology"}
                className={
                  "text-lg font-semibold hover:underline transition-all duration-300"
                }
              >
                Technology
              </NavLink>
            </li>
          </ul>
          <div className="space-x-2">
            <NavLink
              to={"/contact"}
              className={
                "rounded-sm px-4 py-3 text-lg border border-slate-700 hover:border-primary-500 hover:bg-primary-500 hover:text-white duration-all duration-300"
              }
            >
              <i class="fa-solid fa-arrow-right hover:pl-2"></i>
              <span className="pl-4">Click Here</span>
            </NavLink>
            <NavLink
              to={"/contact"}
              className={
                "bg-primary-500 text-white rounded-sm px-6 py-3 text-lg border border-primary-500 hover:border-slate-700 hover:bg-transparent hover:text-black duration-all duration-300"
              }
            >
              Contact
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
