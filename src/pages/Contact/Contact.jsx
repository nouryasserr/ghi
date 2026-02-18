import technology from "../../assets/imgs/technology.jpeg";
import contact from "../../assets/imgs/contact.png";
import phone from "../../assets/imgs/phone.png";
import email from "../../assets/imgs/email.png";
import location from "../../assets/imgs/location.png";

function Contact() {
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
      {/* end-intro */}
      {/* contact-form */}
      <div className="container mt-14 lg:mt-28">
        <div className="flex gap-12 flex-col md:flex-row">
          <form className="md:w-3/4 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                className="w-full md:w-1/2 bg-zinc-100 py-2 px-4 rounded-full placeholder-primary-800 placeholder-text-sm text-lg"
                placeholder="Email"
              />
              <input
                type="text"
                className="w-full md:w-1/2 bg-zinc-100 py-2 px-4 rounded-full placeholder-primary-800 placeholder-text-sm text-lg"
                placeholder="Phone"
              />
            </div>
            <input
              type="text"
              className="w-full bg-zinc-100 py-2 px-4 rounded-full placeholder-primary-800 placeholder-text-sm text-lg"
              placeholder="Name"
            />
            <textarea
              name="message"
              id="message"
              className="w-full bg-zinc-100 py-2 px-4 rounded-2xl placeholder-primary-800 placeholder-text-sm text-lg h-24 resize-none"
              placeholder="Message"
            ></textarea>
            <input
              type="submit"
              className="block w-full bg-black p-3 font-medium text-white text-lg rounded-full cursor-pointer border border-black hover:bg-transparent hover:text-black transition-all duration-300"
              value="Submit"
            />
          </form>
          <div
            className="hidden md:block rounded-2xl py-8 px-6 relative rounded-2xl"
            style={{
              backgroundImage: `url(${contact})`,
              backgroundSize: "cover",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-75 rounded-2xl"></div>
            <div className="relative">
              <h3 className="text-2xl text-white font-semibold mb-3">
                Our Newsletters
              </h3>
              <p className="text-slate-100 mb-4">
                Subscribe to our newsletter for the latest updates and offers
              </p>
              <form>
                <input
                  type="text"
                  className="mt-6 w-full py-2 px-4 rounded-full placeholder-primary-800 placeholder-text-sm text-lg"
                  placeholder="Email"
                />
                <input
                  type="submit"
                  className="w-full p-2 rounded-full bg-black text-white font-medium text-lg mt-4 cursor-pointer border border-black hover:bg-transparent hover:text-black transition-all duration-300"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* end-contact-form */}
      {/* contact-data */}
      <div className="container mt-14 lg:mt-28 flex flex-col md:flex-row gap-8">
        <div className="bg-stone-400 rounded-2xl py-6 px-4 md:w-1/3">
          <div className="flex gap-4 items-center">
            <div
              className="h-10 sm:h-12 w-10 sm:w-12"
              style={{
                backgroundImage: `url(${phone})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h4 className="text-lg sm:text-2xl text-white font-semibold">
              +1 (555) 123-4567
            </h4>
          </div>
          <p className="text-slate-100 mt-4 sm:text-lg">
            Call us for any inquiries or support, Our team is here to assist you
          </p>
        </div>
        <div className="bg-zinc-400 rounded-2xl py-6 px-4 md:w-1/3">
          <div className="flex gap-4 items-center">
            <div
              className="h-10 sm:h-12 w-10 sm:w-12"
              style={{
                backgroundImage: `url(${email})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h4 className="text-lg sm:text-2xl text-white font-semibold">
              contact@example.com
            </h4>
          </div>
          <p className="text-slate-100 mt-4 sm:text-lg">
            Email us for any inquiries or support, Our team is here to assist
            you
          </p>
        </div>
        <div className="bg-slate-500 rounded-2xl py-6 px-4 md:w-1/3">
          <div className="flex gap-2 items-center">
            <div
              className="h-10 sm:h-12 w-10 sm:w-12"
              style={{
                backgroundImage: `url(${location})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h4 className="text-lg sm:text-2xl text-white font-semibold">
              Middle East Head Office
            </h4>
          </div>
          <p className="text-slate-100 mt-4 sm:text-lg">
            Business Center, 3rd Floor - Building No.3 - Business Park - Dubai -
            UAE
          </p>
        </div>
      </div>
      {/* end-contact-data */}
      {/* location */}
      <div className="container mt-14 lg:mt-28 rounded-2xl overflow-hidden">
        <div style={{ width: "100%", height: "450px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.3069245874594!2d55.343231274838345!3d25.22658533051082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d6feb6a62ab%3A0xb790b66d247cbd21!2sBusiness%20Bay%20Bridge%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2seg!4v1771417622026!5m2!1sen!2seg"
            style={{
              border: 0,
              width: "100%",
              height: "100%",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      {/* end-location */}
    </>
  );
}

export default Contact;
