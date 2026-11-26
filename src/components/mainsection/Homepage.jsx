import Navbar from "../common/Navbar";
import hello from "../../assets/images/svg/hello.svg";
import hero_img_2 from "../../assets/images/png/hero_img_2.png";
import hero_img_4 from "../../assets/images/png/hero_img_4.png";
import bgIimage from "../../assets/images/webp/Hero_bg.webp";

const Homepage = () => {
  return (
    <section style={{ backgroundImage: `url(${bgIimage})` }} className="bg-cover bg-center">
      <Navbar />

      <div>
        <div className="hero-container max-w-334.25 mx-auto pt-28 max-lg:pt-20">
          <div className="hero-row flex mr-5.25 gap-y-18.5 max-xl:flex-col-reverse max-xl:items-center max-xl:mr-0">

            {/* LEFT IMAGE */}
            <div className="max-xl:flex max-xl:gap-5.25 -mr-5.25">
              <div className="relative">
                <img
                className="absolute -right-14 -top-16.25 max-xl:-top-10 max-xl:-right-8.75 max-xl:max-w-16.75"
                width={108}
                height={78}
                src={hello}
                alt="hello"
              />
                <img
                  width={272}
                  height={527}
                  src={hero_img_4}
                  alt="hero_img"
                  className="max-w-full h-auto max-xl:max-w-42"
                />
              </div>

              <div>
                <img
                  className="hidden max-xl:block"
                  width={139}
                  height={231}
                  src={hero_img_2}
                  alt="hero_img"
                />
              </div>
            </div>

            {/* CENTER CONTENT */}
            <div className="mt-6.75 max-w-186.5 w-full max-xl:order-1 max-xl:max-w-186.5 max-xl:mx-auto max-xl:mt-0">
              <h1 className="mb-4 text-center text-custom-5xl font-rubik text-rich-black font-semibold leading-118 max-md:text-custom-2xl">
                Navigating{" "}
                <span className="text-orange-red">German Bureaucracy</span>{" "}
                with ease
              </h1>

              <p className="mb-10.5 text-center text-charcoal font-lato leading-150 max-md:text-sm">
                Herbert Visa: Your AI-powered assistant for German visa and
                immigration processes
              </p>

              <div className="flex items-center justify-center w-full">
                <button className="group relative cursor-pointer overflow-hidden flex items-center justify-center px-[23.5px] py-3.5 bg-sandy-orange border border-sandy-orange rounded-lg">
                    <span className="absolute inset-0 z-0 bg-white translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                    <span className="font-rubik relative z-10 font-semibold text-white text-base leading-117 group-hover:text-sandy-orange transition-all duration-300 ease-in">
                      Start your conversation with Herbert
                    </span>
                  </button>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-3 -ml-8 shrink-0 max-xl:hidden max-xl:order-3 max-xl:ml-0 max-xl:mt-0">
              <img
                width={324}
                height={538}
                src={hero_img_2}
                alt="hero_img"
                className="max-w-full h-auto max-xl:max-w-36"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Homepage;