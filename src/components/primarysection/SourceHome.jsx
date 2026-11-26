import SourceHeroImg from "../../assets/images/png/source-hero-one.png"

const SourceHome = () => {
  return (
    <>
      <section className="pt-18 mb-30">
        <div className="mx-auto px-6 max-w-297">
          <div className="flex items-center justify-center flex-col mb-30">
            <div className="flex flex-col items-center justify-center">
              <h1 className=" mb-4 text-center text-custom-5xl font-rubik text-rich-black font-semibold leading-118 max-md:text-custom-2xl max-w-201.75">
                The Foundations of{" "}
                <span className="text-orange-red">German Immigration</span>{" "}
                Expertise
              </h1>
              <p className=" mb-10.5 text-center text-charcoal font-lato leading-150 max-md:text-sm max-w-171.25">
                Herbert, our AI chatbot, is built on a comprehensive
                understanding of German immigration law. To ensure accuracy and
                reliability, Herbert's knowledge base is derived from the
                following authoritative sources:
              </p>

              <button className="group relative cursor-pointer overflow-hidden flex items-center justify-center px-[23.5px] py-3.5 bg-sandy-orange border border-sandy-orange rounded-lg">
                <span className="absolute inset-0 z-0 bg-white translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
                <span className="font-rubik relative z-10 font-semibold text-white text-base leading-117 group-hover:text-sandy-orange transition-all duration-300 ease-in">
                  Contact Us
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mx-auto px-5 max-w-295 w-full">
          <div className="flex items-center justify-between max-w-255.75 gap-8">
            <div className="flex flex-col max-w-119.5">

<h2 className="mb-4 font-semibold text-5xl text-rich-black leading-119">
    Residence
<span className="text-orange-red"> Act</span>
</h2>

              <p className="font-lato max-w-118 text-charcoal text-base leading-163 max-lg:max-w-full">
                The Aufenthaltsgesetz is the cornerstone of German immigration
                law. This act governs:
              </p>
              <ul className="flex flex-col list-disc mt-4 ml-5.5">
                <li className="font-lato text-charcoal text-base leading-163">
                  Entry into Germany
                </li>
                <li className="font-lato text-charcoal text-base leading-163">
                  Residence permits
                </li>
                <li className="font-lato text-charcoal text-base leading-163">
                  Employment regulations for foreigners
                </li>
                <li className="font-lato text-charcoal text-base leading-163">
                  Integration measures
                </li>
              </ul>

              <p className="font-lato max-w-118 text-charcoal text-base leading-163 max-lg:max-w-full">
                Herbert utilizes this act to provide precise information on
                legal residence requirements and pathways to living in Germany.
              </p>
            </div>

            <div className="flex">
<img height={457} width={392} src={SourceHeroImg} alt="SOURCE_HERO_IMAGE" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SourceHome;
