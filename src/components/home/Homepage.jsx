import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Navbar from "../common/Navbar";
import hello from "../../assets/images/svg/hello.svg";
import hero_img_2 from "../../assets/images/png/hero_img_2.png";
import hero_img_3 from "../../assets/images/png/hero_img_3.png";
import hero_img_4 from "../../assets/images/png/hero_img_4.png";
import bgIimage from "../../assets/images/webp/Hero_bg.webp";

gsap.registerPlugin(useGSAP);

const Homepage = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-title", { y: 40, opacity: 0, duration: 0.9 })
        .from(".hero-text", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(".hero-btn", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4");

      mm.add("(min-width: 1280px)", () => {
        gsap.from(".hero-left", {
          x: -80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
        gsap.from(".hero-right", {
          x: 80,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        });
      });

      mm.add("(max-width: 1279px)", () => {
        gsap.from(".hero-left", {
          y: 40,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });

      tl.from(
        ".hero-hello",
        {
          scale: 0,
          rotate: -25,
          opacity: 0,
          transformOrigin: "bottom left",
          duration: 0.6,
          ease: "back.out(2)",
        },
        "-=0.2",
      );

      gsap.to(".hero-hello", {
        y: -6,
        duration: 1.6,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 2,
      });
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      style={{ backgroundImage: `url(${bgIimage})` }}
      className="bg-cover bg-center px-5"
    >
      <Navbar />

      <div>
        <div className="hero-container max-w-322.25 mx-auto pt-28 max-lg:pt-20 pb-10">
          <div className="hero-row flex mr-5.25 gap-y-18.5 max-xl:flex-col-reverse max-xl:items-center max-xl:mr-0">
            {/* LEFT IMAGE */}
            <div className="hero-left max-xl:flex max-xl:gap-5.25 -mr-5.25">
              <div className="relative">
                <img
                  className="hero-hello absolute -right-14 -top-16.25 max-xl:-top-10 max-xl:-right-8.75 max-xl:max-w-16.75"
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
            <div className="mt-6.75 [27px] max-w-186.5 w-full max-xl:order-1 max-xl:max-w-186.5 max-xl:mx-auto max-xl:mt-0">
              <h1 className="hero-title mb-4 text-center text-custom-5xl font-rubik text-rich-black font-semibold leading-118 max-md:text-custom-2xl">
                Navigating{" "}
                <span className="text-orange-red">German Bureaucracy</span> with
                ease
              </h1>

              <p className="hero-text mb-10.5 text-center text-charcoal font-lato leading-150 max-md:text-sm">
                Herbert Visa: Your AI-powered assistant for German visa and
                immigration processes
              </p>

              <button className="hero-btn group relative overflow-hidden text-white cursor-pointer font-semibold text-base leading-119 bg-sandy-orange border border-transparent mx-auto block font-rubik py-3.5 px-6 rounded-lg transition-[background-color,color] duration-500 ease-in-out max-md:text-sm">
                <span className="absolute inset-0 z-0 bg-white translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                <span className="relative z-10 group-hover:text-sandy-orange transition-all duration-300 ease-in">
                  Start your conversation with Herbert
                </span>
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="hero-right order-3 -ml-8 shrink-0 max-xl:hidden max-xl:order-3 max-xl:ml-0 max-xl:mt-0">
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
