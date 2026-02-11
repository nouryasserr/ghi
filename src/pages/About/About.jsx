import about from "../../assets/imgs/about.jpeg";

function About() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${about})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 md:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 md:pb-5 text-xl md:text-4xl xl:text-5xl text-nowrap">
              Shaping the Future
              <span className="font-medium md:pt-4 block text-primary-500">
                Since 2001
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg">
              From our German engineering origins in Gelsenkirchen to leading
              formwork innovation across the Middle East, GHI has been reshaping
              global construction for over twenty years
            </p>
          </div>
          <div className="hidden bg-white p-2 sm:p-4 pb-0 w-fit w-3/4 rounded-tr-3xl md:flex flex-wrap md:flex-nowrap justify-around">
            <div className="text-zinc-600 flex items-center gap-2 font-semibold">
              <span className="text-xl">20+</span>
              <span className="text-sm">Years of Excellence</span>
            </div>
            <div className="text-zinc-600 flex items-center gap-2 font-semibold">
              <span className="text-xl">15+</span>
              <span className="text-sm">Countries Served</span>
            </div>
            <div className="text-zinc-600 flex items-center gap-2 font-semibold">
              <span className="text-xl">5000+</span>
              <span className="text-sm">Projects and Services Completed</span>
            </div>
            <div className="text-zinc-600 flex items-center gap-2 font-semibold">
              <span className="text-xl">50M+</span>
              <span className="text-sm">m² Formed</span>
            </div>
          </div>
        </div>
      </div>
      {/* end-intro */}
      {/* about */}
      <div className="container mt-14 lg:mt-28 flex gap-12 flex-col lg:flex-row">
        <div className="lg:w-1/2 text-center">
          <div className="bg-primary-700 p-3 px-4 rounded-sm mb-6 mx-auto w-fit">
            <i className="fa-solid fa-trophy text-primary-100 text-3xl"></i>
          </div>
          <h3 className="text-2xl xs:text-3xl font-semibold mb-2">
            Our Mission
          </h3>
          <p className="text-slate-700">
            We deliver a one-stop shop for fast, cost-efficient, and customized
            solutions to unconventional needs, harnessing our local presence,
            engineering mindset, and mastery of formwork technology
          </p>
        </div>
        <div className="lg:w-1/2 text-center">
          <div className="bg-primary-700 p-3 px-4 rounded-sm mb-6 mx-auto w-fit">
            <i className="fa-solid fa-ranking-star text-primary-100 text-3xl"></i>
          </div>
          <h3 className="text-2xl xs:text-3xl font-semibold mb-2">Our Goals</h3>
          <p className="text-slate-700">
            Aiming to set the global standard for smart formwork solutions,
            where German engineering precision and digital innovation come
            together to shape tomorrow’s skylines
          </p>
        </div>
      </div>
      {/* end-about */}
      {/* team */}
      <div className="container mt-14 lg:mt-28">
        <div>
          <h4 className="text-2xl xs:text-3xl text-center mb-4 font-semibold xs:font-medium">
            Leadership Team
          </h4>
          <p className="text-sm xs:text-base text-center xl:w-1/2 mx-auto text-slate-700">
            Visionary leaders driving innovation in construction technology
          </p>
        </div>
        <div className="flex justify-center items-center gap-28 flex-wrap mt-12">
          <div className="flex flex-col justify-center gap-8">
            <div className="mx-auto w-28 h-28 rounded-tl-full rounded-tr-full rounded-br-full bg-slate-400"></div>
            <div>
              <h6 className="text-center text-xl font-medium">
                Mohammed Al-Rashid
              </h6>
              <p className="text-primary-500 text-sm text-center">
                Chief Executive Officer
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8">
            <div className="mx-auto w-28 h-28 rounded-tl-full rounded-tr-full rounded-br-full bg-slate-400"></div>
            <div>
              <h6 className="text-center text-xl font-medium">
                Dr. Klaus Weber
              </h6>
              <p className="text-primary-500 text-sm text-center">
                Chief Technology Officer
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-8">
            <div className="mx-auto w-28 h-28 rounded-tl-full rounded-tr-full rounded-br-full bg-slate-400"></div>
            <div>
              <h6 className="text-center text-xl font-medium">Sarah Chen</h6>
              <p className="text-primary-500 text-sm text-center">
                Chief Operations Officer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* end-team */}
      {/* certified */}
      <div className="container mt-14 lg:mt-28">
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col justify-center md:border-r p-12">
            <div className="text-center text-primary-500 text-3xl font-semibold mb-4">
              ISO 9001
            </div>
            <div className="text-center text-slate-700">Quality Management</div>
          </div>
          <div className="flex flex-col justify-center md:border-r p-12">
            <div className="text-center text-primary-500 text-3xl font-semibold mb-4">
              ISO 14001
            </div>
            <div className="text-center text-slate-700">
              Environmental Management
            </div>
          </div>
          <div className="flex flex-col justify-center md:border-r p-12">
            <div className="text-center text-primary-500 text-3xl font-semibold mb-4">
              OHSAS 18001
            </div>
            <div className="text-center text-slate-700">Safety Management</div>
          </div>
          <div className="flex flex-col justify-center p-12">
            <div className="text-center text-primary-500 text-3xl font-semibold mb-4">
              EN 1090
            </div>
            <div className="text-center text-slate-700">
              Structural Components
            </div>
          </div>
        </div>
      </div>
      {/* end-certified */}
    </>
  );
}

export default About;
