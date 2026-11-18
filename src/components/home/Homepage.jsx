import Navbar from "../common/Navbar"
import hero_img_1 from "../../assets/images/png/hero_img_1.png"
import hero_img_2 from "../../assets/images/png/hero_img_2.png"
// import bgIimag
const Homepage = () => {
  return (
    <section>
      <Navbar />
      <div>
        <div className="hero-container max-w-332.25 px-5 mx-auto pt-13.75">
            <div className="hero-row flex mr-5.25">
                <div className="flex">
                    <div className="-mr-19.5">
                        <img width={329} height={592} src={hero_img_1} alt="hero_img" />
                    </div>
                    <div className="mt-21 max-w-186.5 w-full">
                        <h1 className="mb-4 text-center text-custom-5xl font-rubik text-rich-black font-semibold leading-118">Navigating <span className="text-orange-red">German Bureaucracy</span> with ease</h1>
                        <p className="mb-10.5 text-center text-charcoal font-lato leading-150">Herbert Visa: Your AI-powered assistant for German visa and immigration processes</p>
                        <button className="text-white cursor-pointer font-semibold text-base leading-119 bg-sandy-orange mx-auto block font-rubik py-3.5 px-6 rounded-lg">Start your conversation with Herbert</button>
                    </div>
                    <div className="mt-14.25 -ml-8">
                        <img width={324} height={538} src={hero_img_2} alt="hero_img" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Homepage
