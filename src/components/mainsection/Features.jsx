import features_img from "../../assets/images/png/features_img.png";
import { FEATURES, FEATURES_DATA } from "../../utils/helper";

const Features = () => {
  return (
    <section>
      <div className="features-container max-w-297 px-6 mx-auto pb-30 pt-29.5">

        {/* Heading */}
        <div className="mx-auto">
          <h1 className="font-semibold text-5xl font-rubik text-dark text-center leading-134 max-md:text-sm">
            Herbert Main <span className="text-orange-red">Features</span>
          </h1>

          <p className="mb-14 mt-4 font-lato font-normal text-base max-w-139 text-center mx-auto leading-150">
            Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget
            ornare justo netus proin lacus sed.
          </p>
        </div>

        {/* FEATURES GRID */}
        <div
          className="
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
              <div key={idx} className="flex flex-col items-end max-xl:items-start">

                <div className="w-10 h-10 rounded-full bg-sandy-orange flex items-center justify-center">
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
              <div key={idx} className="flex flex-col">

                <div className="w-10 h-10 rounded-full bg-sandy-orange flex items-center justify-center">
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