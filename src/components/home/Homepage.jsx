import Navbar from "../common/Navbar"
import hero_img_1 from "../../assets/images/png/hero_img_1.png"
import hero_img_2 from "../../assets/images/png/hero_img_2.png"
import bgIimage from "../../assets/images/webp/Hero_bg.webp"

const Homepage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgIimage})`,
      }}
      className="bg-cover bg-center"
    >
      <Navbar />

      <div>
        <div className="hero-container max-w-332.25 px-5 mx-auto pt-13.75">

          <div
            className="
              hero-row
              flex
              mr-5.25
              items-start

              max-xl:flex-wrap
              max-xl:mr-0
            "
          >

            {/* LEFT IMAGE */}
            <div
              className="
                order-1
                shrink-0
                -mr-19.5

                max-xl:order-2
                max-xl:mr-0
                max-xl:w-1/2
                max-xl:flex
                max-xl:justify-start
              "
            >
              <img
                width={329}
                height={592}
                src={hero_img_1}
                alt="hero_img"
                className="max-w-full h-auto"
              />
            </div>


            {/* CENTER CONTENT */}
            <div
              className="
                order-2
                mt-21
                max-w-186.5
                w-full

                max-xl:order-1
                max-xl:max-w-186.5
                max-xl:mx-auto
                max-xl:mt-0
              "
            >

              <h1
                className="
                  mb-4
                  text-center
                  text-custom-5xl
                  font-rubik
                  text-rich-black
                  font-semibold
                  leading-118
                "
              >
                Navigating{" "}
                <span className="text-orange-red">
                  German Bureaucracy
                </span>{" "}
                with ease
              </h1>

              <p
                className="
                  mb-10.5
                  text-center
                  text-charcoal
                  font-lato
                  leading-150
                "
              >
                Herbert Visa: Your AI-powered assistant for German visa and
                immigration processes
              </p>

              <button
                className="
                  group
                  relative
                  overflow-hidden
                  text-white
                  cursor-pointer
                  font-semibold
                  text-base
                  leading-119
                  bg-sandy-orange
                  border
                  border-transparent
                  mx-auto
                  block
                  font-rubik
                  py-3.5
                  px-6
                  rounded-lg
                  transition-all
                  duration-500
                  ease-in-out
                  hover:bg-transparent
                  hover:border-sandy-orange
                  hover:text-sandy-orange
                "
              >
                Start your conversation with Herbert
              </button>

            </div>


            {/* RIGHT IMAGE */}
            <div
              className="
                order-3
                mt-14.25
                -ml-8
                shrink-0

                max-xl:order-3
                max-xl:ml-0
                max-xl:mt-0
                max-xl:w-1/2
                max-xl:flex
                max-xl:justify-end
              "
            >
              <img
                width={324}
                height={538}
                src={hero_img_2}
                alt="hero_img"
                className="max-w-full h-auto"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage