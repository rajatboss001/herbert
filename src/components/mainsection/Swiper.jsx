import { SWIPER_DATA } from "../../utils/helper"
const Swiper = () => {
    return (
        <section>
            <div className="swiper-container max-w-297 px-6 mx-auto">
                <div className="flex gap-6 -mt-13 max-xl:flex-wrap items-center justify-center">
                    {SWIPER_DATA.map((items, idx) => (
                        <div key={idx} className="py-5 transition-all ease-in duration-300 cursor-pointer pl-18.75 pr-19.25 border border-black/16 rounded-lg hover:scale-y-[1.2143] hover:shadow-[0px_0px_40px_6px_#8080801F] h-fit bg-white">
                            <div className="max-w-53 w-full">
                                <div className="size-14 bg-orange-200 rounded-full mx-auto flex justify-center item-center">
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
