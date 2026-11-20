import { SWIPER_DATA } from "../../utils/helper"
const Swiper = () => {
    return (
        <section>
            <div className="swiper-container max-w-295 px-5 mx-auto">
                <div className="flex gap-6 max-xl:flex-wrap justify-center">
                    {SWIPER_DATA.map((items, idx) => (
                        <div key={idx} className="py-5 pl-18.75 pr-19.25 border border-black/16 rounded-lg">
                            <div className="max-w-53 w-full">
                                <div className="w-14 h-14 bg-orange-200 rounded-full mx-auto flex justify-center item-center">
                                    <img width={24} height={24}
                                        src={items.img}
                                        alt={items.title}
                                        className=""
                                    />
                                </div>

                                <h4 className="text-center font-lato text-lg font-medium mt-4">{items.title}</h4>
                                <p className="text-center font-lato text-base font-normal mt-3">{items.para}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Swiper
