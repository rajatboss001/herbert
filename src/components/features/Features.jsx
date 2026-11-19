import features_img from "../../assets/images/png/features_img.png"
import { FEATURES } from "../../utils/helper"
import { FEATURES_DATA } from "../../utils/helper"
const Features = () => {
  return (
    <section>
      <div className="features-container max-w-295 px-5 mx-auto pb-30 pt-29.5">
        <div className="mx-auto">
          <h1 className="font-semibold text-5xl font-rubik text-dark text-center leading-134">Herbert Main <span className="text-orange-red">Features</span></h1>
          <p className="mb-14 mt-4 font-lato font-normal text-base max-w-139 text-center mx-auto leading-150">Lorem ipsum dolor sit amet consectetur. Tellus ipsum semper eget ornare justo netus proin lacus sed.</p>
        </div>
        <div className="features-row flex justify-between">
          <div className="flex gap-18">
            <div className="flex flex-col gap-14 max-w-81.25">
              {FEATURES.map((items, idx) => (
                <div key={idx} className="flex flex-col items-end">
                  <div className="w-10 h-10 rounded-full bg-sandy-orange flex items-center justify-center">
                    <div
                      dangerouslySetInnerHTML={{ __html: items.img }}
                    />
                  </div>
                  <h6 className="mt-4 text-dark font-medium text-xl font-lato leading-120 text-right">{items.title}</h6>
                </div>
              ))}
            </div>
            <div>
              <img width={344} height={460} src={features_img} alt="feature-img" />
            </div>
          </div>
          <div className="max-w-81.25 flex flex-col gap-14">
            {FEATURES_DATA.map((items, idx) => (
              <div key={idx} className="flex flex-col">
                  <div className="w-10 h-10 rounded-full bg-sandy-orange flex items-center justify-center">
                    <div
                      dangerouslySetInnerHTML={{ __html: items.img }}
                    />
                  </div>
                  <h6 className="mt-4 text-dark font-medium text-xl font-lato leading-120">{items.title}</h6>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
