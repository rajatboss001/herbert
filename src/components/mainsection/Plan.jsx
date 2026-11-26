
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import checkmark from "../../assets/images/svg/checkmark.svg";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    id: 1,
    price: "$5/mo",
    name: "Basic",
    badge: "bg-black text-white",
    description:
      "Ideal for newcomers! Get quick and reliable answers to your basic questions about German immigration policies. Perfect for a brief introduction without long-term commitment.",
    messages: "10 messages",
    button: "Upgrade to Basic",
  },
  {
    id: 2,
    price: "$10/mo",
    name: "Standard",
    badge: "bg-[#FFDF55] text-black",
    description:
      "Your go-to resource for thorough visa application preparation. Ensure you have all the necessary information and answers to confidently navigate the German visa process.",
    messages: "25 messages",
    button: "Upgrade to Standard",
  },
  {
    id: 3,
    price: "$20/mo",
    name: "Premium",
    badge: "bg-[#FF492B] text-white",
    description:
      "Have Herbert accompany you throughout your entire visa application journey. With extensive message credits, you can ask questions whenever you need, ensuring a smooth and informed experience.",
    messages: "50 messages",
    button: "Upgrade to Premium",
  },
];

const Plan = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const ctx = gsap.context(() => {
      const mediaQuery = gsap.matchMedia();

      mediaQuery.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          const heading = section.querySelector(".pricing-heading");
          const intro = section.querySelector(".pricing-intro");
          const cards = section.querySelectorAll(".pricing-card");

          gsap.from([heading, intro], {
            autoAlpha: 0,
            y: 24,
            duration: 0.7,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: heading,
              start: "top 85%",
              once: true,
            },
          });

          gsap.from(cards, {
            autoAlpha: 0,
            y: 32,
            duration: 0.65,
            stagger: 0.16,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cards[0],
              start: "top 85%",
              once: true,
            },
          });
        }
      );

      return () => mediaQuery.revert();
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-lite-orange py-16 sm:py-20"
    >
      <div className="relative z-10 mx-auto w-full max-w-297 px-6">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-[500px] text-center sm:mb-[50px]">

          <h2 className="pricing-heading font-rubik text-3xl font-semibold leading-[1.18] text-[#010101] sm:text-4xl lg:text-5xl">
            Friendly Pricing{" "}
            <span className="text-orange-red">Plans</span>
          </h2>

          <p className="pricing-intro mx-auto mt-4 max-w-[460px] font-lato text-sm leading-[1.5] text-[#686868] sm:text-base">
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>

        </div>

        {/* Pricing Cards */}
        <div className="pricing-cards mx-auto grid w-full grid-cols-1 justify-items-center gap-y-10 min-[900px]:grid-cols-3 min-[900px]:justify-items-stretch min-[900px]:gap-x-[108px]">

          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`pricing-card relative flex min-h-[350px] w-full max-sm:min-w-0 min-w-[308px] flex-col ${
                index !== 0
                  ? "border-t border-[#D6D0CB] pt-8 min-[900px]:border-t-0 min-[900px]:pt-0 min-[900px]:before:absolute min-[900px]:before:-left-[54px] min-[900px]:before:top-0 min-[900px]:before:h-full min-[900px]:before:w-px min-[900px]:before:bg-[#D6D0CB]"
                  : ""
              }`}
            >

              {/* Price and Badge */}
              <div className="mb-3.5 flex w-full items-center justify-between gap-3">

                <h3 className="whitespace-nowrap font-rubik text-[36px] font-semibold leading-[1.19] text-[#010101] sm:text-[44px]">
                  {plan.price}
                </h3>

                <span
                  className={`shrink-0 rounded-md px-2 py-1.5 font-lato text-sm font-normal leading-[1.5] ${plan.badge}`}
                >
                  {plan.name}
                </span>

              </div>

              {/* Description */}
              <p className="font-lato text-base font-normal leading-[1.5] text-[#5F5F5F]">
                {plan.description}
              </p>

              {/* Included */}
              <h4 className="mt-5 mb-5 font-lato text-base font-bold leading-[1.2] text-[#010101]">
                What's included?
              </h4>

              {/* Messages */}
              <div className="mb-6 flex items-center gap-1.5 font-lato text-sm leading-[1.5] text-[#686868]">

                <img
                  src={checkmark}
                  alt=""
                  className="h-4 w-4 shrink-0"
                />

                <span>{plan.messages}</span>

              </div>

              {/* Button */}
              <button
                type="button"
                className="group relative mt-auto flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-sandy-orange border border-sandy-orange px-4 py-3 font-rubik text-sm font-semibold leading-[1.2] text-white sm:text-base"
              >
                <span className="absolute inset-0 z-0 bg-white translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                <span className="font-rubik relative z-10 font-semibold text-white group-hover:text-sandy-orange transition-all duration-300 ease-in">
                  {plan.button}
                </span>
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Plan;
