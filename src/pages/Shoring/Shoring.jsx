import solution04 from "../../assets/imgs/solution4.jpeg";
import shoring01 from "../../assets/imgs/shoring01.jpeg";
import shoring02 from "../../assets/imgs/shoring02.jpeg";
import { NavLink } from "react-router-dom";

function Shoring() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${solution04})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 sm:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 sm:pb-5 text-xl sm:text-4xl xl:text-5xl text-nowrap">
              Shoring System
            </h2>
          </div>
        </div>
      </div>
      {/* end-intro */}
      {/* trio */}
      <div className="container mt-14 lg:mt-28">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div
            className="bg-cover bg-center h-[300px] overflow-hidden relative w-full md:w-auto md:grow rounded-sm px-4"
            style={{ backgroundImage: `url(${shoring01})` }}
          >
            <h3 className="text-2xl bg-white px-3 flex justify-between items-center font-medium rounded-sm absolute bottom-4 w-full">
              <span className="py-2">D15 Shoring</span>
              <NavLink
                to={"/solutions"}
                className="bg-primary-500 px-4 py-2 rounded-l-full cursor-pointer hover:bg-primary-700 transition-all duration-300"
              >
                <i className="fa-solid fa-arrow-right text-white"></i>
              </NavLink>
            </h3>
          </div>
          <div
            className="bg-cover bg-center h-[300px] overflow-hidden relative w-full md:w-auto md:grow rounded-sm px-4"
            style={{ backgroundImage: `url(${shoring02})` }}
          >
            <h3 className="text-2xl bg-white px-3 flex justify-between items-center font-medium rounded-sm absolute bottom-4 w-full">
              <span className="py-2">Modular Scaffolding</span>
              <NavLink
                to={"/solutions"}
                className="bg-primary-500 px-4 py-2 rounded-l-full cursor-pointer hover:bg-primary-700 transition-all duration-300"
              >
                <i className="fa-solid fa-arrow-right text-white"></i>
              </NavLink>
            </h3>
          </div>
        </div>
      </div>
      {/* end-trio */}
    </>
  );
}

export default Shoring;
