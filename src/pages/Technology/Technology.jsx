import technology from "../../assets/imgs/technology.jpeg";

function Technology() {
  return (
    <>
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${technology})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 sm:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 sm:pb-5 text-xl sm:text-4xl xl:text-5xl text-nowrap">
              Technology & Innovation
            </h2>
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg">
              German-engineered excellence shaping the next generation of
              formwork technology
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
