import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Minus from "../../assets/images/svg/minus.svg";
import Plus from "../../assets/images/svg/plus.svg";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Faq = () => {
  const sectionRef = useRef(null);

  const faqs = [
    {
      question: "What is Herbert?",
      answer:
        "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
      question: "How accurate is the information provided by Herbert?",
      answer:
        "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
      question: "How can I access Herbert?",
      answer:
        "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
      question: "How can Herbert help me with my visa application?",
      answer:
        "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
      question: "Is Herbert available in multiple languages?",
      answer:
        "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
    {
      question: "Can Herbert help me fill out my visa application forms?",
      answer:
        "Herbert is an AI-powered assistant designed to help with German visa and immigration processes. It provides guidance, answers questions, and helps you navigate the requirements and procedures involved.",
    },
  ];

  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  useGSAP(
    () => {
      gsap.from(".faq-heading > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".faq-heading",
          start: "top 85%",
        },
      });

      gsap.from(".faq-item", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: ".faq-grid",
          start: "top 85%",
        },
      });

      gsap.from(".faq-viewall", {
        y: 20,
        opacity: 0,
        scale: 0.9,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".faq-viewall",
          start: "top 95%",
        },
      });

      const ctaTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: ".faq-cta",
          start: "top 80%",
        },
      });

      ctaTl
        .from(".faq-cta", { y: 60, opacity: 0, scale: 0.95, duration: 0.9 })
        .from(".faq-cta-title", { y: 30, opacity: 0, duration: 0.7 }, "-=0.4")
        .from(".faq-cta-text", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(
          ".faq-cta-btn",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.15,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        );
    },
    { scope: sectionRef },
  );

  return (
    <>
      <section ref={sectionRef} className="pt-16">
        <div className="mx-auto px-5 w-full max-w-295">
          <div className="flex items-center justify-center w-full flex-col gap-16">
            <div className="faq-heading text-center">
              <h2 className="mb-4 font-semibold text-5xl text-rich-black leading-119">
                Frequently Asked{" "}
                <span className="text-orange-red">Questions</span>
              </h2>

              <p className="font-lato text-charcoal text-base leading-150 max-w-155.5 mx-auto">
                Help users find quick answers to common queries about Herbert,
                our AI-powered assistant for German visa and immigration
                processes.
              </p>
            </div>

            <div className="w-full">
              <div className="faq-grid grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={index}
                      className={`faq-item border rounded-md px-6 py-[17.5px] box-border transition-[border-color,box-shadow] duration-300 ease-in-out ${
                        isOpen
                          ? "border-transparent shadow-[0px_0px_16px_6px_#8080801F]"
                          : "border-black/16 shadow-none"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggleFaq(index)}
                        aria-expanded={isOpen}
                        className="flex items-center justify-between gap-4 cursor-pointer w-full text-left"
                      >
                        <span className="font-lato text-base font-normal text-rich-black">
                          {faq.question}
                        </span>

                        <span className="shrink-0">
                          <img
                            height={14}
                            width={14}
                            src={isOpen ? Minus : Plus}
                            alt={isOpen ? "Minus" : "Plus"}
                          />
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in ${
                          isOpen
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="font-lato text-base font-normal text-charcoal mt-3 leading-150">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center justify-center mt-12">
                <button className="faq-viewall group relative cursor-pointer overflow-hidden flex items-center justify-center px-6 py-3.5 bg-sandy-orange border border-sandy-orange rounded-lg">
                  <span className="absolute inset-0 z-0 bg-white translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                  <span className="font-rubik relative z-10 font-semibold text-white text-base leading-117 group-hover:text-sandy-orange transition-all duration-300 ease-in">
                    View All
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto px-5 w-full max-w-295">
          <div className="faq-cta mt-30 flex items-center justify-center bg-sandy-orange w-full py-16 rounded-lg flex-col -mb-33.5 relative">
            <div className="flex items-center justify-center flex-col">
              <h2 className="faq-cta-title font-semibold text-5xl text-white leading-119 max-w-158 mb-4 text-center">
                Need Help in Your Visa? Ask Herbert Now!
              </h2>
              <p className="faq-cta-text font-lato text-white text-center text-base leading-150 max-w-132">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
                phasellus mollis sit aliquam sit nullam.
              </p>

              <div className="flex items-center justify-center gap-4 mt-10.5">
                <button className="faq-cta-btn group relative cursor-pointer overflow-hidden flex items-center justify-center px-6 py-3.5 bg-white border border-white rounded-lg">
                  <span className="absolute inset-0 z-0 bg-sandy-orange translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                  <span className="font-rubik relative z-10 font-semibold text-sandy-orange text-base leading-117 group-hover:text-white transition-all duration-300 ease-in">
                    Start your conversation
                  </span>
                </button>

                <button className="faq-cta-btn group relative cursor-pointer overflow-hidden flex items-center justify-center px-6 py-3.5 bg-sandy-orange border border-white rounded-lg">
                  <span className="absolute inset-0 z-0 bg-white translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                  <span className="font-rubik relative z-10 font-semibold text-white text-base leading-117 group-hover:text-sandy-orange transition-all duration-300 ease-in">
                    Learn More
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
