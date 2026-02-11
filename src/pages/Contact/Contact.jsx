import technology from "../../assets/imgs/technology.jpeg";

function Contact() {
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
              Keep in Touch
            </h2>
            <p className="text-slate-300 text-sm sm:text-base xl:text-lg">
              Connect with our worldwide formwork specialists—guiding you from
              consultation to project completion and ensuring all your
              construction needs are met
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
