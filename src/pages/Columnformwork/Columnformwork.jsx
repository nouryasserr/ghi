import solution02 from "../../assets/imgs/solution2.jpeg";
import column01 from "../../assets/imgs/column01.jpeg";
import column02 from "../../assets/imgs/column02.jpeg";
import column03 from "../../assets/imgs/column03.jpeg";
import column04 from "../../assets/imgs/column04.jpeg";
import { NavLink } from "react-router-dom";

function Columnformwork() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${solution02})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 sm:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 sm:pb-5 text-xl sm:text-4xl xl:text-5xl text-nowrap">
              Column Formwork Solution
            </h2>
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg">
              Modular systems supporting circular, rectangular, and custom
              geometries, featuring quick-connect mechanisms that reduce setup
              time by up to 60%
            </p>
          </div>
        </div>
      </div>
      {/* end-intro */}
      {/* trio */}
      <div className="container mt-14 lg:mt-28">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div
            className="bg-cover bg-center h-[300px] overflow-hidden relative w-full md:w-auto md:grow rounded-sm px-4"
            style={{ backgroundImage: `url(${column01})` }}
          >
            <h3 className="text-2xl bg-white px-3 flex justify-between items-center font-medium rounded-sm absolute bottom-4 w-full">
              <span className="py-2">Flex 50 column</span>
              <NavLink
                to={"/climbingsystems"}
                className="bg-primary-500 px-4 py-2 rounded-l-full cursor-pointer hover:bg-primary-700 transition-all duration-300"
              >
                <i className="fa-solid fa-arrow-right text-white"></i>
              </NavLink>
            </h3>
          </div>
          <div
            className="bg-cover bg-center h-[300px] overflow-hidden relative w-full md:w-auto md:grow rounded-sm px-4"
            style={{ backgroundImage: `url(${column02})` }}
          >
            <h3 className="text-2xl bg-white px-3 flex justify-between items-center font-medium rounded-sm absolute bottom-4 w-full">
              <span className="py-2">TriTec Column</span>
              <NavLink
                to={"/climbingsystems"}
                className="bg-primary-500 px-4 py-2 rounded-l-full cursor-pointer hover:bg-primary-700 transition-all duration-300"
              >
                <i className="fa-solid fa-arrow-right text-white"></i>
              </NavLink>
            </h3>
          </div>
          <div
            className="bg-cover bg-center h-[300px] overflow-hidden relative w-full md:w-auto md:grow rounded-sm px-4"
            style={{ backgroundImage: `url(${column03})` }}
          >
            <h3 className="text-2xl bg-white px-3 flex justify-between items-center font-medium rounded-sm absolute bottom-4 w-full">
              <span className="py-2">Circular Column</span>
              <NavLink
                to={"/climbingsystems"}
                className="bg-primary-500 px-4 py-2 rounded-l-full cursor-pointer hover:bg-primary-700 transition-all duration-300"
              >
                <i className="fa-solid fa-arrow-right text-white"></i>
              </NavLink>
            </h3>
          </div>
          <div
            className="bg-cover bg-center h-[300px] overflow-hidden relative w-full md:w-auto md:grow rounded-sm px-4"
            style={{ backgroundImage: `url(${column04})` }}
          >
            <h3 className="text-2xl bg-white px-3 flex justify-between items-center font-medium rounded-sm absolute bottom-4 w-full">
              <span className="py-2">Special Shapes</span>
              <NavLink
                to={"/climbingsystems"}
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

export default Columnformwork;
