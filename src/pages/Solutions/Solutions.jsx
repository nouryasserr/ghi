import solutions from "../../assets/imgs/solutions.jpeg";

function Solutions() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${solutions})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
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
      {/* trio */}
      <div className="container mt-14 lg:mt-28">
        <div className="flex flex-col md:flex-row">
          <div className="grow pb-10 md:py-4 md:pr-6 lg:pr-12 border-b md:border-b-0 md:border-r-2 border-slate-700">
            <h3 className="text-2xl xs:text-3xl font-medium text-center italic mb-4">
              Flex 50
            </h3>
            <p className="text-center text-slate-700">
              Lightweight panel solutions for residential and commercial
              applications, enabling quick installation with tool-free assembly
            </p>
          </div>
          <div className="grow py-10 md:py-4 md:px-6 lg:px-12 border-b md:border-b-0 md:border-r-2 border-slate-700">
            <h3 className="text-2xl xs:text-3xl font-medium text-center italic mb-4">
              TriTec
            </h3>
            <p className="text-center text-slate-700">
              Robust heavy-duty solutions for infrastructure and high-rise
              developments, designed for ultimate flexibility
            </p>
          </div>
          <div className="grow pt-10 md:py-4 md:pl-6 lg:pl-12">
            <h3 className="text-2xl xs:text-3xl text-nowrap font-medium text-center italic mb-4">
              Custom Solutions
            </h3>
            <p className="text-center text-slate-700">
              Precision-engineered formwork designed to meet complex geometries
              and unique architectural requirements
            </p>
          </div>
        </div>
      </div>
      {/* end-trio */}
    </>
  );
}

export default Solutions;
