import projects from "../../assets/imgs/about.jpeg";

function Projects() {
  return (
    <>
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
          <div className="hidden bg-white p-2 sm:p-4 pb-0 w-fit sm:w-3/4 rounded-tr-3xl md:flex justify-around">
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
    </>
  );
}

export default Projects;
