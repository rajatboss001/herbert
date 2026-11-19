
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
        "Herbert provides guidance based on available information. Always verify important requirements with official German government sources.",
    },
    {
      question: "How can I access Herbert?",
      answer:
        "You can access Herbert through our platform and use its assistance to explore German visa and immigration information.",
    },
    {
      question: "How can Herbert help me with my visa application?",
      answer:
        "Herbert can help you understand visa requirements, prepare for the application process, and find relevant information about required documents.",
    },
    {
      question: "Is Herbert available in multiple languages?",
      answer:
        "Herbert is designed to make visa and immigration guidance easier to understand. Language availability depends on the supported platform options.",
    },
    {
      question: "Can Herbert help me fill out my visa application forms?",
      answer:
        "Herbert can guide you through the information required in your visa application forms and help you understand the different sections.",
    },
  ];

  return (
    <>
      <section className="">
        <div className="mx-auto px-5 w-full max-w-295">
          <div className="flex items-center justify-center w-full flex-col gap-16">
            <div className="">
              <h2 className="mb-4 font-semibold text-5xl text-rich-black leading-119">
                Frequently Asked{" "}
                <span className="text-orange-red">Questions</span>
              </h2>

              <p className="font-lato text-charcoal text-base leading-163 text-center max-w-155.5">
                Help users find quick answers to common queries about Herbert,
                our AI-powered assistant for German visa and immigration
                processes.
              </p>
            </div>

            {/* FAQ Section */}
            <div className="w-full max-w-[1140px] mx-auto">

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

                {faqs.map((faq, index) => (
                  <details
                    key={index}
                    open={index === 0 ? true : undefined}
                    className={`group border border-soft-black rounded-md p-[18px] ${
                      index === 0
                        ? "shadow-[0px_4px_20px_rgba(0,0,0,0.10)]"
                        : ""
                    }`}
                  >
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">

                      <span className="font-lato text-base font-normal text-rich-black">
                        {faq.question}
                      </span>

                      <span className="shrink-0 text-rich-black text-xl leading-none">
                        <span className="group-open:hidden">+</span>
                        <span className="hidden group-open:inline">−</span>
                      </span>

                    </summary>

                    <p className="font-lato text-base font-normal text-charcoal mt-3">
                      {faq.answer}
                    </p>

                  </details>
                ))}

              </div>

              {/* View All Button */}
              <div className="flex items-center justify-center mt-9">
                <button className="px-6 py-3 bg-sandy-orange rounded-lg font-lato text-base font-semibold text-white">
                  View All
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
