import { NavLink } from "react-router-dom";
import cover from "../../assets/imgs/cover.jpeg";
import project01 from "../../assets/imgs/project01.jpeg";
import project02 from "../../assets/imgs/project02.jpeg";
import project03 from "../../assets/imgs/project03.jpeg";
import project04 from "../../assets/imgs/project04.jpeg";
import solution01 from "../../assets/imgs/solution1.jpeg";
import solution02 from "../../assets/imgs/solution2.jpeg";
import solution03 from "../../assets/imgs/solution3.jpeg";
import global from "../../assets/imgs/global.jpeg";
import future from "../../assets/imgs/future.jpeg";

function Home() {
  return (
    <>
      {/* intro */}
      <div className="container mt-3">
        <div
          className="bg-cover bg-center w-full h-[350px] sm:h-[550px] rounded-3xl overflow-hidden relative"
          style={{ backgroundImage: `url(${cover})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-35"></div>
          <div className="absolute bottom-0 left-0">
            <div className="p-4 sm:p-10 sm:w-3/5 text-center sm:text-left">
              <h1 className="text-white pb-2 sm:pb-5 text-xl sm:text-4xl xl:text-6xl text-nowrap">
                Engineering Tomorrow's{" "}
                <span className="font-medium sm:pt-4 block">Skylines</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base xl:text-lg">
                Providing versatile and customized formwork solutions through an
                engineering approach with unwavering focus on quality and
                innovation
              </p>
            </div>
            <div className="bg-white p-2 sm:p-4 pb-0 w-fit sm:w-96 rounded-tr-3xl">
              <NavLink
                to={"/contact"}
                className={
                  "bg-black text-white border border-black rounded-full px-5 py-3 block text-center sm:text-lg hover:bg-transparent hover:text-black transition-all duration-300"
                }
              >
                Start Your Project
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* end-intro */}
      {/* about */}
      <div className="container mt-14 lg:mt-28 flex flex-col lg:flex-row justify-between gap-10 sm:gap-16 lg:gap-28">
        <div className="lg:w-1/2 flex flex-col items-center lg:items-start justify-between">
          <div className="mb-8 lg:mb-0">
            <h3 className="text-center lg:text-left text-2xl xs:text-3xl xl:text-4xl mb-2 xl:mb-6 font-semibold">
              About GHI Formwork
            </h3>
            <p className="text-center lg:text-left text-sm xs:text-base xl:text-lg text-slate-700">
              From our German engineering roots in Gelsenkirchen to becoming the
              Middle East's premier formwork innovator, GHI has spent two
              decades transforming how the world builds
            </p>
          </div>
          <h5 className="text-lg xs:text-2xl text-zinc-700 font-medium flex items-center gap-x-2">
            Building the Future{" "}
            <span className="xl:text-4xl text-primary-600 font-semibold">
              Since 2001
            </span>
          </h5>
        </div>
        <div className="lg:w-1/2">
          <div className="flex flex-wrap justify-around gap-6 sm:gap-x-16 sm:gap-y-10">
            <div className="w-40 xl:w-48">
              <div className="text-center text-4xl xl:text-5xl font-medium mb-4">
                20+
              </div>
              <p className="text-center text-base xl:text-lg text-slate-700">
                Years of Excellence
              </p>
            </div>
            <div className="w-40 xl:w-48">
              <div className="text-center text-4xl xl:text-5xl font-medium mb-4">
                5000+
              </div>
              <p className="text-center text-base xl:text-lg text-slate-700">
                Projects and Services Delivered
              </p>
            </div>
            <div className="w-40 xl:w-48">
              <div className="text-center text-4xl xl:text-5xl font-medium mb-4">
                60%
              </div>
              <p className="text-center text-base xl:text-lg text-slate-700">
                Faster setup time
              </p>
            </div>
            <div className="w-40 xl:w-48">
              <div className="text-center text-4xl xl:text-5xl font-medium mb-4">
                15+
              </div>
              <p className="text-center text-base xl:text-lg text-slate-700">
                Countries Served
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end-about */}
      {/* solutions */}
      <div className="container mt-14 lg:mt-28">
        <div>
          <h4 className="text-2xl xs:text-3xl text-center mb-4 font-semibold xs:font-medium">
            Intelligent Formwork Systems
          </h4>
          <p className="text-sm xs:text-base text-center xl:w-1/2 mx-auto text-slate-700">
            Transforming construction sites into precision-engineered
            environments where every pour is optimized, every timeline
            accelerated
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center mt-12 gap-8">
          <div className="grow shadow-lg">
            <img
              src={solution01}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                Wall Formwork Systems
              </h5>
              <p className="text-slate-700">
                AI-optimized configurations delivering 40% faster assembly with
                integrated IoT sensors for real-time monitoring
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Self-aligning panel technology</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Load capacity up to 100 kN/m²</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Digital twin integration</span>
                </li>
              </ul>
              <NavLink
                to={"/solutions"}
                className={
                  "flex items-center gap-2 text-primary-500 hover:gap-3 transition-all duration-300"
                }
              >
                <span className="font-semibold text-lg">Explore Solutions</span>{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="grow shadow-lg">
            <img
              src={solution02}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                Column Formwork Solutions
              </h5>
              <p className="text-slate-700">
                Modular systems for circular, rectangular, and custom geometries
                with quick-connect mechanisms reducing setup by 60%
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Pressure-optimized design</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Heights up to 20m single pour</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>AR assembly guidance</span>
                </li>
              </ul>
              <NavLink
                to={"/solutions"}
                className={
                  "flex items-center gap-2 text-primary-500 hover:gap-3 transition-all duration-300"
                }
              >
                <span className="font-semibold text-lg">Explore Solutions</span>{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </NavLink>
            </div>
          </div>
          <div className="grow shadow-lg">
            <img
              src={solution03}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold">
                Smart Climbing Systems
              </h5>
              <p className="text-slate-700">
                Self-climbing platforms with predictive maintenance algorithms
                and automated safety compliance verification
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Wind force adaptation</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Cycle time under 45 minutes</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Remote monitoring capable</span>
                </li>
              </ul>
              <NavLink
                to={"/solutions"}
                className={
                  "flex items-center gap-2 text-primary-500 hover:gap-3 transition-all duration-300"
                }
              >
                <span className="font-semibold text-lg">Explore Solutions</span>{" "}
                <i className="fa-solid fa-chevron-right"></i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* end-solutions */}
      {/* global */}
      <div className="container mt-14 lg:mt-28 flex flex-col lg:flex-row justify-between gap-x-28">
        <div className="lg:w-1/2 space-y-12 flex items-start gap-4 lg:block ">
          <div className="lg:w-3/4">
            <h4 className="text-xl sm:text-3xl mb-2 sm:mb-4 font-medium">
              German Engineering{" "}
              <span className="block text-primary-500 sm:mt-2 font-semibold">
                Global Execution
              </span>
            </h4>
            <p className="text-sm sm:text-base text-slate-700">
              Born from German engineering precision in Gelsenkirchen and raised
              on global construction sites, we don't just supply formwork—we
              engineer possibilities
            </p>
          </div>
          <div className="flex lg:hidden w-28 h-20 sm:w-60 sm:h-32 p-4 bg-primary-400 rounded-full !mt-0 items-center justify-center text-xs sm:text-sm text-center text-white">
            5,000+ Projects{" "}
            <span className="hidden sm:contents">and Services Completed</span>
          </div>
          <div
            className="hidden lg:block  bg-contain bg-center h-[450px] rounded-2xl relative"
            style={{ backgroundImage: `url(${global})` }}
          >
            <div className="absolute -right-16 -top-16 w-48 h-48 p-4 bg-primary-400 rounded-full flex items-center justify-center text-center text-white font-medium text-lg">
              5,000+ Projects and Services Completed
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:w-1/2">
          <div className="border-b border-slate-300 py-6 pb-8 sm:pb-12 flex gap-4">
            <div className="bg-primary-900 p-2 rounded-full h-fit">
              <i className="fa-solid fa-earth-asia text-white text-3xl"></i>
            </div>
            <div>
              <h5 className="text-lg xs:text-xl font-semibold mb-2">
                Strategic Global Presence
              </h5>
              <p className="text-slate-700 text-sm xs:text-base">
                Local expertise backed by global standards in Middle East,
                Europe, Asia, and Africa
              </p>
            </div>
          </div>
          <div className="border-b border-slate-300 sm:py-6 pb-8 sm:pb-12 flex gap-4">
            <div className="bg-primary-900 p-2 rounded-full h-fit">
              <i className="fa-solid fa-medal text-white text-3xl"></i>
            </div>
            <div>
              <h5 className="text-lg xs:text-xl font-semibold mb-2">
                ISO 9001:2015 Certified
              </h5>
              <p className="text-slate-700 text-sm xs:text-base">
                Quality management systems that exceed international standards
              </p>
            </div>
          </div>
          <div className="border-b border-slate-300 sm:py-6 pb-8 sm:pb-12 flex gap-4">
            <div className="bg-primary-900 p-2 rounded-full h-fit">
              <i className="fa-solid fa-atom text-white text-3xl"></i>
            </div>
            <div>
              <h5 className="text-lg xs:text-xl font-semibold mb-2">
                24/7 Engineering Support
              </h5>
              <p className="text-slate-700 text-sm xs:text-base">
                Round-the-clock technical assistance for mission-critical
                projects
              </p>
            </div>
          </div>
          <div className="border-b border-slate-300 sm:py-6 pb-8 sm:pb-12 flex gap-4">
            <div className="bg-primary-900 p-2 rounded-full h-fit">
              <i className="fa-solid fa-atom text-white text-3xl"></i>
            </div>
            <div>
              <h5 className="text-lg xs:text-xl font-semibold mb-2">
                24/7 Engineering Support
              </h5>
              <p className="text-slate-700 text-sm xs:text-base">
                Round-the-clock technical assistance for mission-critical
                projects
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end-global */}
      {/* projects */}
      <div className="container mt-14 lg:mt-28">
        <div className="container-grid">
          <div
            className="area05 bg-cover bg-center rounded-2xl relative"
            style={{ backgroundImage: `url(${project04})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            <div className="absolute right-4 bottom-2">
              <p className="text-white text-sm font-light underline">
                Business Bay Complex
              </p>
            </div>
          </div>
          <div
            className="area04 bg-cover bg-center rounded-2xl relative"
            style={{ backgroundImage: `url(${project03})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            <div className="absolute right-4 bottom-2">
              <p className="text-white text-sm font-light underline">
                Metropolitan Tower
              </p>
            </div>
          </div>
          <div
            className="area03 bg-cover bg-center rounded-2xl relative"
            style={{ backgroundImage: `url(${project02})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            <div className="absolute right-4 bottom-2">
              <p className="text-white text-sm font-light underline">
                Makkah Grand Development
              </p>
            </div>
          </div>
          <div
            className="area02 bg-cover bg-center rounded-2xl relative"
            style={{ backgroundImage: `url(${project01})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            <div className="absolute right-4 bottom-2">
              <p className="text-white text-sm font-light underline">
                Dubai Marina Twin Towers
              </p>
            </div>
          </div>
          <div className="area01">
            <h4 className="text-2xl xs:text-3xl text-center xs:text-left mb-4 font-semibold xs:font-medium">
              Projects That Define Skylines
            </h4>
            <p className="text-sm xs:text-base text-center xs:text-left text-slate-700">
              From iconic towers to infrastructure megaprojects, our formwork
              systems shape the world's most ambitious constructions
            </p>
          </div>
          <div className="area06">
            <NavLink
              to={"/projects"}
              className="border border-black rounded-full px-5 py-3 block text-center textlg font-medium hover:bg-black hover:text-white transition-all duration-300"
            >
              See More Projects
            </NavLink>
          </div>
        </div>
      </div>
      {/* end-projects */}
      {/* future */}
      <div className="container mt-8 xs:mt-14 lg:mt-28">
        <div>
          <h4 className="text-2xl xs:text-3xl text-center mb-4 font-medium">
            The Future of Formwork is Digital
          </h4>
          <p className="text-center text-sm xs:text-base lg:w-1/2 mx-auto text-slate-700">
            Pioneering smart construction with IoT sensors, AI optimization, and
            real-time monitoring systems
          </p>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row justify-between gap-x-12">
          <div className="lg:w-1/2">
            <div
              className="bg-cover bg-center h-64 lg:h-[470px] rounded-2xl"
              style={{ backgroundImage: `url(${future})` }}
            ></div>
          </div>
          <div className="flex flex-col gap-8 lg:w-1/2">
            <div className="border-b border-slate-300 py-6 pb-8 sm:pb-12 flex gap-4">
              <div className="bg-primary-900 p-2 rounded-full h-fit">
                <i className="fa-solid fa-display text-white text-xl xs:text-3xl"></i>
              </div>
              <div>
                <h5 className="text-lg xs:text-xl font-semibold xs:mb-2">
                  BIM Integration
                </h5>
                <p className="text-slate-700 text-sm xs:text-base">
                  Seamless integration with Building Information Modeling for
                  precise planning and clash detection before site deployment
                </p>
              </div>
            </div>
            <div className="border-b border-slate-300 sm:py-6 pb-8 sm:pb-12 flex gap-4">
              <div className="bg-primary-900 p-2 rounded-full h-fit">
                <i className="fa-solid fa-chart-simple text-white text-3xl"></i>
              </div>
              <div>
                <h5 className="text-lg xs:text-xl font-semibold mb-2">
                  Real-time Analytics
                </h5>
                <p className="text-slate-700 text-sm xs:text-base">
                  Live dashboard monitoring of concrete pressure, temperature,
                  and curing progress accessible from anywhere
                </p>
              </div>
            </div>
            <div className="border-b border-slate-300 sm:py-6 pb-8 sm:pb-12 flex gap-4">
              <div className="bg-primary-900 p-2 rounded-full h-fit">
                <i className="fa-solid fa-hexagon-nodes-bolt text-white text-3xl"></i>
              </div>
              <div>
                <h5 className="text-lg xs:text-xl font-semibold mb-2">
                  AI-Powered Optimization
                </h5>
                <p className="text-slate-700 text-sm xs:text-base">
                  Round-the-clock technical assistance for mission-critical
                  projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end-future */}
    </>
  );
}

export default Home;
