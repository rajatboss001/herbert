import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { SWIPER_DATA } from "../../utils/helper";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Swiper = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".swiper-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".swiper-icon", {
        scale: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.2,
        delay: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <section className="xl:-mt-27">
      <div
        ref={containerRef}
        className="swiper-container max-w-295 px-5 mx-auto"
      >
        <div className="flex gap-6 max-xl:flex-wrap justify-center z-10 relative">
          {SWIPER_DATA.map((items, idx) => (
            <div
              key={idx}
              className="swiper-card py-5 cursor-pointer bg-white pl-18.75 pr-19.25 border border-black/16 rounded-lg h-49 transition-[height,margin,box-shadow] duration-300 ease-in-out hover:h-59.5 hover:-my-5.25 hover:shadow-[var(--sds-size-depth-0)_var(--sds-size-depth-0)_var(--sds-size-depth-400)_6px_rgba(128,128,128,0.12)]"
            >
              <div className="max-w-53 w-full">
                <div className="swiper-icon w-14 h-14 bg-orange-200 rounded-full mx-auto flex justify-center items-center">
                  <img
                    width={24}
                    height={24}
                    src={items.img}
                    alt={items.title}
                  />
                </div>

                <h4 className="text-center font-lato text-lg font-medium mt-4">
                  {items.title}
                </h4>
                <p className="text-center font-lato text-base font-normal mt-3 text-charcoal">
                  {items.para}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Swiper;
