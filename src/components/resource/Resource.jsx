import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import resource_img_big from "../../assets/images/png/resource_img.png";
import Change_Img from "../../assets/images/png/resource-change-img.png";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Resource = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      tl.from(".resource-title", { y: 40, opacity: 0, duration: 0.8 })
        .from(".resource-text", { y: 30, opacity: 0, duration: 0.7 }, "-=0.5")
        .from(
          ".resource-item",
          { x: -30, opacity: 0, duration: 0.6, stagger: 0.15 },
          "-=0.4",
        )
        .from(
          ".resource-btn",
          {
            y: 20,
            opacity: 0,
            scale: 0.9,
            duration: 0.6,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );

      tl.from(
        ".resource-img",
        {
          x: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.25,
        },
        0.2,
      );
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section ref={sectionRef} className="pt-35.25 pb-31.25 overflow-x-clip">
        <div className="mx-auto max-xl:px-5 max-w-360 w-full">
          <div className="flex items-center justify-between gap-10 ml-auto w-full max-w-322.5 flex-wrap max-lg:justify-start">
            <div className="flex flex-col">
              <div className=" flex flex-col max-w-118.25 mb-10.5 max-lg:max-w-full">
                <h2 className="resource-title mb-4 font-semibold text-5xl text-rich-black leading-119">
                  Team<span className="text-orange-red"> & </span>Resources
                </h2>
                <p className="resource-text font-lato max-w-118 text-charcoal text-base leading-163 max-lg:max-w-full">
                  Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper
                  eget ornare justo netus proin lacus sed. Vulputate eget lectus
                  vitae iaculis rhoncus.
                </p>
                <ul className="flex flex-col list-disc mt-4 ml-5.5">
                  <li className="resource-item font-lato text-charcoal text-base leading-163">
                    Single entrepreneur (yourself)
                  </li>
                  <li className="resource-item font-lato text-charcoal text-base leading-163">
                    Outsourced development to freelancers
                  </li>
                  <li className="resource-item font-lato text-charcoal text-base leading-163">
                    Budget: $15,000
                  </li>
                </ul>
              </div>
              <div className="flex">
                <button className="resource-btn group relative cursor-pointer overflow-hidden flex items-center justify-center px-[23.5px] py-3.5 bg-sandy-orange border border-sandy-orange rounded-lg">
                  <span className="absolute inset-0 z-0 bg-white translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                  <span className="font-rubik relative z-10 font-semibold text-white text-base leading-117 group-hover:text-sandy-orange transition-all duration-300 ease-in">
                    Learn more
                  </span>
                </button>
              </div>
            </div>

            <div className="flex max-sm:hidden">
              <img
                width={701}
                height={602}
                className="resource-img max-md:max-w-150"
                src={resource_img_big}
                alt="RESOURCE_IMAGE_ONE"
              />
            </div>
            {/* <div className="max-md:sm flex">
              <img
                className="resource-img"
                height={305}
                width={261}
                src={Change_Img}
                alt="RESPONSIVE_CHANGED_IMAGE"
              />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resource;
