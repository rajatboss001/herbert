import BcodeImg from "../../assets/images/png/bcode-img.png";

const BorderCode = () => {
  return (
    <>
      <section className="bg-lite-orange py-18 w-full">
        <div className="max-w-360 w-full mx-auto px-6">
          <div className="flex items-center justify-between gap-8 mr-auto max-w-322.5 w-full">
            <div className="flex">
              <img
                height={602}
                width={673}
                className=""
                src={BcodeImg}
                alt="BORDER_CODE_IMAGE"
              />
            </div>
            <div className="flex flex-col max-w-118.25">
              <h2 className="mb-4 font-semibold text-5xl text-rich-black leading-119">
               Schengen Borders <span className="text-orange-red">Code</span>
              </h2>

              <p className="font-lato max-w-118 text-charcoal text-base leading-163 max-lg:max-w-full">
                As part of the Schengen Area, Germany adheres to this code for
                border control. Herbert's knowledge of the Schengener Grenzkodex
                covers:
              </p>

              <ul className="flex flex-col list-disc mt-4 ml-5.5">
                <li className="font-lato text-charcoal text-base leading-163">
                  Short-term stay regulations
                </li>
                <li className="font-lato text-charcoal text-base leading-163">
                  Entry requirements for the Schengen Area
                </li>
                <li className="font-lato text-charcoal text-base leading-163">
                  Border crossing procedures
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BorderCode;
