import technology from "../../assets/imgs/technology.jpeg";
import solution01 from "../../assets/imgs/solution1.jpeg";
import solution02 from "../../assets/imgs/solution2.jpeg";
import project03 from "../../assets/imgs/project03.jpeg";

function Technology() {
  return (
    <>
      {/* intro */}
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
      {/* end-intro */}
      {/* trio */}
      <div className="container mt-14 lg:mt-28">
        <div>
          <h4 className="text-2xl xs:text-3xl text-center mb-4 font-medium">
            Core Technology Features
          </h4>
          <p className="text-center text-sm xs:text-base lg:w-1/2 mx-auto text-slate-700">
            Advanced formwork solutions built on decades of German engineering
            expertise and continuous innovation
          </p>
        </div>
        <div className="flex flex-col lg:flex-row mt-12">
          <div className="grow pb-10 lg:py-4 lg:pr-6 lg:pr-12 border-b lg:border-b-0 lg:border-r-2 border-slate-700">
            <h3 className="text-2xl xs:text-3xl font-medium text-center italic mb-4">
              Inter-System Compatibility
            </h3>
            <p className="text-center text-slate-700">
              Designed for full compatibility with top European formwork brands,
              our systems integrate effortlessly with your existing equipment
              inventory
            </p>
          </div>
          <div className="grow py-10 lg:py-4 lg:px-6 lg:px-12 border-b lg:border-b-0 lg:border-r-2 border-slate-700">
            <h3 className="text-2xl xs:text-3xl font-medium text-center italic mb-4">
              Modular Design
            </h3>
            <p className="text-center text-slate-700">
              Unified connection systems and dimensions allow flexible
              integration of components across multiple manufacturers and
              product ranges
            </p>
          </div>
          <div className="grow pt-10 lg:py-4 lg:pl-6 lg:pl-12">
            <h3 className="text-2xl xs:text-3xl font-medium text-center italic mb-4">
              Certified Standards
            </h3>
            <p className="text-center text-slate-700">
              Built in accordance with DIN 18202 and DIN 18201 German standards,
              ensuring full compatibility and safety across all integrated
              systems
            </p>
          </div>
        </div>
      </div>
      {/* end-trio */}
      {/* technology */}
      <div className="container mt-14 lg:mt-28">
        <div>
          <h4 className="text-2xl xs:text-3xl text-center mb-4 font-medium">
            Core Technology Platforms
          </h4>
          <p className="text-center text-sm xs:text-base lg:w-1/2 mx-auto text-slate-700">
            Advanced formwork systems engineered for maximum efficiency and
            adaptability
          </p>
        </div>
        <div className="mt-12 flex flex-col lg:flex-row lg:flex-wrap justify-center items-center mt-12 gap-8">
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[630px]">
            <img
              src={solution01}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold text-center">
                TriTec ProMax™
              </h5>
              <p className="text-slate-700 text-center">
                Premium Steel Panel Formwork System
              </p>
              <ul className="flex flex-col gap-4 items-center pb-6">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Universal tie rod pattern compatible with all major systems
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    80 kN/m² pressure capacity with integrated safety features
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Quick-lock mechanism reduces assembly time by 40%</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Hot-dip galvanized frame for 25+ years service life
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[630px]">
            <img
              src={solution02}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold text-center">
                TriTec FlexLite™
              </h5>
              <p className="text-slate-700 text-center">
                Lightweight Aluminum Panel System
              </p>
              <ul className="flex flex-col gap-4 items-center pb-6">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>50% lighter than conventional steel systems</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Same connection points as TriTec ProMax for seamless
                    integration
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Ergonomic design reduces worker fatigue and injury risk
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    60 kN/m² capacity with reinforced aluminum alloy frame
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[630px]">
            <img
              src={solution02}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold text-center">
                TopDeck UltraFlex™
              </h5>
              <p className="text-slate-700 text-center">
                Advanced Aluminum Slab Formwork
              </p>
              <ul className="flex flex-col gap-4 items-center pb-6">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>Modular grid system adapts to any slab geometry</span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Compatible with competitor prop systems and accessories
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Integrated fall protection system exceeds EN 13374 standards
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Quick-drop mechanism for 70% faster striking times
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="grow shadow-lg lg:min-w-[300px] lg:max-w-[630px]">
            <img
              src={project03}
              alt="Solution 1"
              className="h-52 w-full rounded-t-xl object-cover"
            />
            <div className="mt-2 p-4 space-y-3 xs:space-y-4">
              <h5 className="text-xl xs:text-2xl font-semibold text-center">
                SmartClimb CS360™
              </h5>
              <p className="text-slate-700 text-center">
                Intelligent Self-Climbing System
              </p>
              <ul className="flex flex-col gap-4 items-center pb-6">
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Hydraulic climbing with integrated safety monitoring
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    Universal anchor system works with all concrete types
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>
                    360° working platform with full weather protection
                  </span>
                </li>
                <li className="flex items-center text-sm gap-2">
                  <i className="fa-solid fa-check text-primary-500"></i>
                  <span>IoT-enabled for remote monitoring and operation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* end-technolgy */}
      {/* certified */}
      <div className="container mt-14 lg:mt-28">
        <div>
          <h4 className="text-2xl xs:text-3xl text-center mb-4 font-medium">
            Engineering Excellence
          </h4>
          <p className="text-center text-sm xs:text-base lg:w-1/2 mx-auto text-slate-700">
            Comprehensive technical services powered by advanced software and
            expertise
          </p>
        </div>
        <div className="mt-12 flex flex-wrap xl:flex-nowrap justify-center gap-8">
          <div className="flex flex-col justify-center md:border-r p-12 max-w-[310px]">
            <div className="text-center text-primary-500 text-2xl text-nowrap font-semibold mb-4">
              Static Calculations
            </div>
            <div className="text-center text-slate-700 text-sm">
              Our internal engineering team utilizes SCIA Engineer and TEKLA to
              deliver precise structural analysis
            </div>
          </div>
          <div className="flex flex-col justify-center md:border-r p-12 max-w-[310px]">
            <div className="text-center text-primary-500 text-2xl font-semibold mb-4 sm:text-nowrap">
              3D BIM Integration
            </div>
            <div className="text-center text-slate-700 text-sm">
              End-to-end 3D modeling and clash detection enabled through
              integrated Revit and AutoCAD workflows
            </div>
          </div>
          <div className="flex flex-col justify-center md:border-r p-12 max-w-[310px]">
            <div className="text-center text-primary-500 text-2xl text-nowrap font-semibold mb-4">
              Method Statements
            </div>
            <div className="text-center text-slate-700 text-sm">
              Detailed execution plans with safety procedures and quality
              checkpoints
            </div>
          </div>
          <div className="flex flex-col justify-center p-12 max-w-[310px]">
            <div className="text-center text-primary-500 text-nowrap text-2xl font-semibold mb-4">
              On-Site Support
            </div>
            <div className="text-center text-slate-700 text-sm">
              Certified engineers providing expert oversight and immediate,
              on-site problem solving
            </div>
          </div>
        </div>
      </div>
      {/* end-certified */}
    </>
  );
}

export default Technology;
