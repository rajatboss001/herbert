import Minus from "../../assets/images/svg/minus.svg";
import Plus from "../../assets/images/svg/plus.svg";
import { useState } from "react";

const Faq = () => {
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

  return (
    <>
      <section className="pb-16">
        <div className="mx-auto px-5 w-full max-w-295">
          <div className="flex items-center justify-center w-full flex-col gap-16">
            <div className="text-center">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {faqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={index}
                      className={`border rounded-md px-6 py-[17.5px] box-border transition-all duration-300 ease-in-out ${
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
                            className=""
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
                <button className="group relative cursor-pointer overflow-hidden flex items-center justify-center px-6 py-3.5 bg-sandy-orange border border-sandy-orange rounded-lg">
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
          <div className="mt-30 flex items-center justify-center bg-sandy-orange w-full py-16 rounded-xl flex-col">
<div className="flex items-center justify-center flex-col">
  <h2 className="font-semibold text-5xl font-rubik text-white leading-119 max-w-158 mb-4 text-center">
Need Help in Your Visa? Ask Herbert Now!
  </h2>
  <p className="font-lato text-white text-center text-base leading-150 max-w-[528px]">Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam.</p>

<div className="flex items-center justify-center gap-4 mt-10.5">
<button className="group relative cursor-pointer overflow-hidden flex items-center justify-center px-6 py-3.5 bg-white border border-white rounded-lg">
                  <span className="absolute inset-0 z-0 bg-sandy-orange translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>

                  <span className="font-rubik relative z-10 font-semibold text-sandy-orange text-base leading-117 group-hover:text-white transition-all duration-300 ease-in">
                   Start your conversation
                  </span>
                </button>

                <button className="group relative cursor-pointer overflow-hidden flex items-center justify-center px-6 py-3.5 bg-sandy-orange border border-white  rounded-lg">
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
