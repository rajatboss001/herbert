import { SWIPER_DATA } from "../../utils/helper"
// import bgImage from "../../assets/images/webp/hero_img.webp"
const Swiper = () => {
    return (
        <section>
            <div className="swiper-container">
                <div className="flex">
                    {SWIPER_DATA.map((items, idx) => (
                        <div key={idx} className="py-5 pl-18.75 pr-19.25 gap-6">
                            <div className="w-14 h-14 bg-orange-yellow-gradient rounded-full mx-auto">
                                <img
                                    src={items.img}
                                    alt={items.title}
                                    className="w-6 h-6"
                                />
                            </div>

                            <h4 className="text-center">{items.title}</h4>
                            <p className="text-center">{items.para}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Swiper
