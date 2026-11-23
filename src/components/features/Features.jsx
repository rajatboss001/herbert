import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import features_img from "../../assets/images/png/features_img.png";
import { FEATURES, FEATURES_DATA } from "../../utils/helper";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Features = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".features-heading > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".features-heading",
          start: "top 85%",
        },
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1280px)", () => {
        gsap.from(".feature-left", {
          x: -60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 75%",
          },
        });

        gsap.from(".feature-right", {
          x: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 75%",
          },
        });
      });

      mm.add("(max-width: 1279px)", () => {
        gsap.from(".feature-left, .feature-right", {
          y: 40,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 70%",
          },
        });
      });

      gsap.from(".features-img", {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 80%",
        },
      });

      gsap.from(".feature-icon", {
        scale: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
        stagger: 0.12,
        delay: 0.4,
        scrollTrigger: {
          trigger: ".features-grid",
          start: "top 75%",
        },
      });
    },
    { scope: sectionRef },
  );

  return (
    <section ref={sectionRef}>
      <div className="features-container max-w-295 px-5 mx-auto pb-30 pt-29.5">
        {/* Heading */}
        <div className="features-heading mx-auto">
          <h1 className="font-semibold text-5xl font-rubik text-dark text-center leading-134 max-md:text-sm">
            Herbert Main <span className="text-orange-red">Features</span>
          </h1>

          <p className="mb-14 mt-4 font-lato font-normal text-base max-w-139 text-center mx-auto leading-150 text-charcoal">
            Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget
            ornare justo netus proin lacus sed.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div
          className="
            features-grid
            grid grid-cols-3
            items-center
            justify-items-center
            max-xl:grid-cols-2
            max-xl:gap-y-11
            max-xl:gap-x-10
            max-sm:gap-x-6
          "
        >
          {/* LEFT */}
          <div
            className="
              flex flex-col gap-14
              max-w-81.25
              max-xl:col-start-1
              max-xl:row-start-2
              max-xl:justify-self-end
              self-start
            "
          >
            {FEATURES.map((items, idx) => (
              <div
                key={idx}
                className="feature-left flex flex-col items-end max-xl:items-start"
              >
                <div className="feature-icon w-10 h-10 rounded-full bg-sandy-orange flex items-center justify-center">
                  <div dangerouslySetInnerHTML={{ __html: items.img }} />
                </div>

                <h6 className="mt-4 text-dark font-medium text-xl font-lato leading-120 text-right max-xl:text-left">
                  {items.title}
                </h6>
              </div>
            ))}
          </div>

          {/* IMAGE */}
          <div
            className="
              flex justify-center
              max-xl:col-span-2
              max-xl:col-start-1
              max-xl:row-start-1
              max-xl:justify-self-center
            "
          >
            <img
              className="features-img"
              width={344}
              height={460}
              src={features_img}
              alt="feature-img"
            />
          </div>

          {/* RIGHT */}
          <div
            className="
              max-w-81.25
              flex flex-col gap-14
              max-xl:col-start-2
              max-xl:row-start-2
              max-xl:justify-self-start
              self-start
            "
          >
            {FEATURES_DATA.map((items, idx) => (
              <div key={idx} className="feature-right flex flex-col">
                <div className="feature-icon w-10 h-10 rounded-full bg-sandy-orange flex items-center justify-center">
                  <div dangerouslySetInnerHTML={{ __html: items.img }} />
                </div>

                <h6 className="mt-4 text-dark font-medium text-xl font-lato leading-120">
                  {items.title}
                </h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
