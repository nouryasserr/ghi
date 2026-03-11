import projects from "../../assets/imgs/project.jpeg";
import project01 from "../../assets/imgs/project01.jpeg";
import project03 from "../../assets/imgs/project03.jpeg";
import project04 from "../../assets/imgs/project04.jpeg";
import project05 from "../../assets/imgs/project05.jpeg";

function Projects() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${projects})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 md:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 md:pb-5 text-xl md:text-4xl xl:text-5xl text-nowrap">
              Sample of Our
              <span className="font-medium md:pt-4 block text-primary-500">
                Projects
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
              src={projects}
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
              <ul className="space-y-3 border-b pb-4">
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
              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    Varied
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Heights
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    12,500 m²
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Areas
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    24 Months
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Duration
                  </span>
                </div>
              </div>
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
                Jurainah Cultural Complex
              </h5>
              <p className="text-slate-700">
                A highlighting GHI’s expertise with bespoke formwork for unique
                curves and cantilevers
              </p>
              <ul className="space-y-3 border-b pb-4">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Shoring System </span>
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
              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    Varied
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Heights
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    12,500 m²
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Areas
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    24 Months
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Duration
                  </span>
                </div>
              </div>
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
                Blue waters Island - Dubai
              </h5>
              <p className="text-slate-700">
                Aerial view of Blue Waters Island in construction in Dubai,
                United Arab Emirates
              </p>
              <ul className="space-y-3 border-b pb-4">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>shoring system</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Wall Formwork</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>column Formwork</span>
                </li>
              </ul>
              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    Varied
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Heights
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    320,000 m²
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Area
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    60 Months
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Duration
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[413px]">
            <img
              src={project01}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-[23px] font-semibold">
                Increasing Haram Mataf Capacity
              </h5>
              <p className="text-slate-700">
                Mega Scale project aims to increase the building capacity to
                accommodate more pilgrims
              </p>
              <ul className="space-y-3  border-b pb-4">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Mega Trusses</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Beam Supports</span>
                </li>
              </ul>
              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    Varied
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Heights
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    Varied
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Areas
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    36 Months
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Duration
                  </span>
                </div>
              </div>
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
                Regency Hotel
              </h5>
              <p className="text-slate-700">
                In Abu Dhabi, the project features varied building heights, with
                a total duration of 24 months
              </p>
              <ul className="space-y-3 border-b pb-4">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Shoring Systems</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Inclined Special Columns</span>
                </li>
              </ul>
              <div className="flex justify-around items-center">
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    Varied
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Heights
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    Varied
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Areas
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-primary-500 text-center font-medium">
                    24 Months
                  </span>
                  <span className="text-xs text-slate-600 text-center">
                    Duration
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end-projects */}
    </>
  );
}

export default Projects;
