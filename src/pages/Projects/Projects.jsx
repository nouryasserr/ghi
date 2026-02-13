import projects from "../../assets/imgs/about.jpeg";
import project01 from "../../assets/imgs/project01.jpeg";
import project02 from "../../assets/imgs/project02.jpeg";
import project03 from "../../assets/imgs/project03.jpeg";
import project04 from "../../assets/imgs/project04.jpeg";
import project05 from "../../assets/imgs/project05.jpeg";
import project06 from "../../assets/imgs/project06.jpeg";

function Projects() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${projects})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 md:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 md:pb-5 text-xl md:text-4xl xl:text-5xl text-nowrap">
              Projects That Define
              <span className="font-medium md:pt-4 block text-primary-500">
                Skylines
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg">
              From landmark towers to mega infrastructure projects, our formwork
              systems have transformed over 5,000 structures in more than 15
              countries
            </p>
          </div>
          <div className="hidden bg-white p-2 sm:p-4 pb-0 w-fit md:w-3/4 rounded-tr-3xl md:flex justify-around">
            <div className="text-zinc-600 flex items-center gap-2 font-semibold">
              <span className="text-xl">5000+</span>
              <span className="text-sm">Projects and Services Completed</span>
            </div>
            <div className="text-zinc-600 flex items-center gap-2 font-semibold">
              <span className="text-xl">50+ </span>
              <span className="text-sm">Countries</span>
            </div>
            <div className="text-zinc-600 flex items-center gap-2 font-semibold">
              <span className="text-xl">500+</span>
              <span className="text-sm">High-Rise Towers</span>
            </div>
            <div className="text-zinc-600 flex items-center gap-2 font-semibold">
              <span className="text-xl">50M+</span>
              <span className="text-sm">m² Formed</span>
            </div>
          </div>
        </div>
      </div>
      {/* end-intro */}
      {/* projects */}
      <div className="container mt-14 lg:mt-28">
        <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mt-12 gap-8">
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[413px]">
            <img
              src={project01}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                Dubai Marina Twin Towers
              </h5>
              <p className="text-slate-700">
                Twin 47-story luxury residential towers featuring advanced
                self-climbing formwork systems
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Climbing Systems</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Wall Formwork</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Column Formwork</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[413px]">
            <img
              src={project02}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                Makkah Grand Development
              </h5>
              <p className="text-slate-700">
                Mega-scale hospitality complex serving millions of pilgrims with
                innovative formwork deployment
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Shoring Systems</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Slab Support</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Custom Solutions</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[413px]">
            <img
              src={project03}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                Metropolitan Tower
              </h5>
              <p className="text-slate-700">
                62-floor residential tower with automated climbing systems
                achieving 3-day cycle times
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Climbing Systems</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Wall Formwork</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Safety Platforms</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[413px]">
            <img
              src={project04}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                Business Bay Complex
              </h5>
              <p className="text-slate-700">
                Mixed-use development featuring office spaces and retail with
                optimized formwork cycles
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Wall Formwork</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Column Formwork</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Slab Support</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[413px]">
            <img
              src={project05}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                King Fahd Bridge Extension
              </h5>
              <p className="text-slate-700">
                Critical infrastructure project with specialized heavy-duty
                shoring for bridge segments
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Shoring Systems</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Custom Engineering</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Heavy Load Support</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[413px]">
            <img
              src={project06}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                Marina Heights
              </h5>
              <p className="text-slate-700">
                Luxury waterfront residences with challenging cantilever designs
                and custom formwork solutions
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Climbing Systems</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Wall Formwork</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Edge Protection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end-projects */}
    </>
  );
}

export default Projects;
