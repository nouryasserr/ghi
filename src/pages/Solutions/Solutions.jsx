import solutions from "../../assets/imgs/solutions.jpeg";
import solution01 from "../../assets/imgs/solution1.jpeg";
import solution02 from "../../assets/imgs/solution2.jpeg";
import solution03 from "../../assets/imgs/solution3.jpeg";
import { NavLink } from "react-router-dom";

function Solutions() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${solutions})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 sm:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 sm:pb-5 text-xl sm:text-4xl xl:text-5xl text-nowrap">
              Intelligent Formwork Solutions
            </h2>
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg">
              Pioneering construction’s future with German-engineered formwork
              systems, merging precision, efficiency, and cutting-edge digital
              innovation
            </p>
          </div>
        </div>
      </div>
      {/* end-intro */}
      {/* solutions */}
      <div className="container mt-14 lg:mt-28">
        <div>
          <h4 className="text-2xl xs:text-3xl text-center mb-4 font-semibold xs:font-medium">
            Intelligent Formwork Systems
          </h4>
          <p className="text-sm xs:text-base text-center xl:w-1/2 mx-auto text-slate-700">
            Turning construction sites into precision-engineered spaces where
            every pour is optimized and every timeline is accelerated
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
                AI-optimized configurations enabling up to 40% faster assembly,
                supported by integrated IoT sensors for real-time monitoring
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
                to={"/wallformwork"}
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
                Modular systems supporting circular, rectangular, and custom
                geometries, featuring quick-connect mechanisms that reduce setup
                time by up to 60%
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
                to={"/columnformwork"}
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
                Self-climbing platforms powered by predictive maintenance
                algorithms and automated safety compliance verification
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
                to={"/climbingsystems"}
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
    </>
  );
}

export default Solutions;
