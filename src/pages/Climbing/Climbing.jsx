import solution03 from "../../assets/imgs/solution3.jpeg";

function Climbing() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${solution03})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 sm:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 sm:pb-5 text-xl sm:text-4xl xl:text-5xl text-nowrap">
              Smart Climbing System
            </h2>
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg">
              Self-climbing platforms powered by predictive maintenance
              algorithms and automated safety compliance verification
            </p>
          </div>
        </div>
      </div>
      {/* end-intro */}
    </>
  );
}

export default Climbing;
