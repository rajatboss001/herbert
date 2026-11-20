import Navbar from "../common/Navbar"
import hello from "../../assets/images/svg/hello.svg"
// import hero_img_1 from "../../assets/images/png/hero_img_1.png"
import hero_img_2 from "../../assets/images/png/hero_img_2.png"
import hero_img_3 from "../../assets/images/png/hero_img_3.png"
import bgIimage from "../../assets/images/webp/Hero_bg.webp"

const Homepage = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${bgIimage})`,
      }}
      className="bg-cover bg-center px-5"
    >
      <Navbar />

      <div>
        <div className="hero-container max-w-322.25 mx-auto pt-28">

          <div
            className="
              hero-row
              flex
              mr-5.25
              gap-y-10
              max-xl:flex-col-reverse
              max-xl:items-center
              max-xl:mr-0
            "
          >

            {/* LEFT IMAGE */}
            <div
              className="
                order-1
                shrink-0
                mr-4.5
                relative 
                max-xl:flex
                max-xl:justify-start
              "
            >
              <img className="absolute -right-24 -top-16.25" width={108} height={78} src={hello} alt="hello" />
              <div>
                <img
                  width={232}
                  height={513}
                  src={hero_img_3}
                  alt="hero_img"
                  className="max-w-full h-auto"
                />
              </div>
              <div>
                <img className="hidden max-xl:block" width={139} height={231} src={hero_img_2} alt="hero_img" />
              </div>
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
                  max-md:text-custom-2xl
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
                  max-md:text-sm
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
                  max-md:text-sm
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
                max-xl:hidden

                max-xl:order-3
                max-xl:ml-0
                max-xl:mt-0
              "
            >
              <img
                width={324}
                height={538}
                src={hero_img_2}
                alt="hero_img"
                className="max-w-full h-auto max-xl:max-w-36"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage