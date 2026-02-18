import solution05 from "../../assets/imgs/solution5.jpeg";

function Slab() {
  return (
    <>
      {/* intro */}
      <div
        className="bg-cover bg-center w-full h-[350px] sm:h-[350px] overflow-hidden relative"
        style={{ backgroundImage: `url(${solution05})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute bottom-0 left-0">
          <div className="p-4 sm:p-10 sm:w-3/5 text-center sm:text-left">
            <h2 className="text-white pb-2 sm:pb-5 text-xl sm:text-4xl xl:text-5xl text-nowrap">
              Slab Support
            </h2>
          </div>
        </div>
      </div>
      {/* end-intro */}
    </>
  );
}

export default Slab;
