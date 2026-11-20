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
        const mediaQuery = gsap.matchMedia();

        mediaQuery.add("(prefers-reduced-motion: no-preference)", () => {
            const section = sectionRef.current;
            const heading = section.querySelector(".pricing-heading");
            const intro = section.querySelector(".pricing-intro");
            const cards = section.querySelector(".pricing-cards");
            const planCards = section.querySelectorAll(".pricing-card");

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

            gsap.from(planCards, {
                autoAlpha: 0,
                y: 32,
                duration: 0.65,
                stagger: 0.16,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cards,
                    start: "top 85%",
                    once: true,
                },
            });
        });

        return () => mediaQuery.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full overflow-hidden bg-[#FFF8F2] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 xl:px-[150px]">
            {/* Background Shape */}
            <div className="absolute -right-24 top-24 h-[430px] w-[220px] rounded-[50%]"></div>
            <div className="relative z-10 mx-auto max-w-[1140px]">
                <div className="mx-auto mb-10 max-w-[592px] text-center sm:mb-14">
                    <h2 className="pricing-heading font-rubik text-3xl font-semibold leading-118 text-[#010101] sm:text-4xl lg:text-5xl">
                        Friendly Pricing{" "}
                        <span className="text-[#FF492B]">
                            Plans
                        </span>
                    </h2>
                    <p className="pricing-intro mx-auto mt-4 max-w-[515px] font-lato text-lg leading-150 text-[#686868] lg:text-base">
                        Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.
                    </p>
                </div>
                {/* Pricing Cards */}
                <div className="pricing-cards mx-auto grid w-full max-w-[540px] grid-cols-1 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
                    {plans.map((plan, index) => (
                        <div key={plan.id} className={`pricing-card min-w-0 ${index !== 0 ? "border-t border-[#D6D0CB] pt-10 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-8" : ""}`}>
                            {/* Price and Badge */}
                            <div className="mb-5 flex max-w-none items-center justify-between gap-4 lg:max-w-[308px]">
                                <h3 className="font-rubik text-[40px] font-semibold leading-118 text-[#010101] sm:text-[44px]">{plan.price}</h3>
                                <span className={`rounded-lg px-2 py-[5px] text-base font-normal leading-150 ${plan.badge}`}>{plan.name}</span>
                            </div>
                            {/* Description */}
                            <p className="max-w-none font-lato text-lg font-normal leading-150 text-[#5F5F5F] lg:max-w-[308px] lg:text-base">
                                {plan.description}
                            </p>
                            {/* Included */}
                            <h4 className="my-6 font-lato text-lg font-bold leading-[75%] text-[#010101] lg:text-base">
                                What's included?
                            </h4>
                            {/* Messages */}
                            <div className="mb-8 flex items-center gap-[5px] font-lato text-lg leading-150 text-[#686868] lg:text-base">
                                <img src={checkmark} alt="" className="h-4 w-4" />
                                <span>{plan.messages}</span>
                            </div>
                            {/* Button */}
                            <button className="group relative flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-[#FF9645] px-5 py-[14px] font-rubik text-base font-semibold leading-118 text-white sm:text-lg lg:text-base">
                                <span className="absolute inset-0 z-0 bg-white translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                                <span className="relative z-10 font-rubik font-semibold text-white group-hover:text-[#FF9645] transition-all duration-300 ease-in">{plan.button}</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plan;
