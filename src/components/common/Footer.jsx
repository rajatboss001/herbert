import logo from "../../assets/images/svg/logo.svg";
const Footer = () => {

  const currentyear = new Date().getFullYear();

  return (
    <footer className="bg-warm-ivory">
      <div className="footer-container pt-53 max-w-295 px-5 mx-auto pb-12.5">
        <div className="footer-row flex justify-between gap-x-10 gap-y-10 max-lg:flex-wrap">
          <div className="left max-w-103">
            <a href="#">
              <img width={326} height={98} src={logo} alt="logo" />
            </a>
            <p className="font-normal text-base font-lato text-charcoal mt-3.75">
              Lorem ipsum dolor sit amet consectetur. Fusce tortor etiam vitae
              velit mi sed mattis tempor tristique. Purus sed phasellus metus
              lectus auctor.
            </p>
          </div>
          <div className="right max-w-129.5 flex justify-between mt-4 w-full max-sm:flex-wrap">
            <div>
              <h4 className="font-medium font-lato text-base text-dark mb-4">
                Quick Links
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="flex">
                  <a
                    className=" text-charcoal leading-150 font-lato font-normal hover:text-sandy-orange transition-all duration-300 ease-in"
                    href="#"
                  >
                    Services
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="text-charcoal leading-150 font-lato font-normal hover:text-sandy-orange transition-all duration-300 ease-in"
                    href="#"
                  >
                    About Us
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="text-charcoal leading-150 font-lato font-normal hover:text-sandy-orange transition-all duration-300 ease-in"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="text-charcoal leading-150 font-lato font-normal hover:text-sandy-orange transition-all duration-300 ease-in"
                    href="#"
                  >
                    Plans
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium font-lato text-base text-dark mb-4">
                Support
              </h4>
              <ul className="flex flex-col gap-2">
                <li className="flex">
                  <a
                    className="text-charcoal leading-150 font-lato font-normal hover:text-sandy-orange transition-all duration-300 ease-in"
                    href="#"
                  >
                    Help Center
                  </a>
                </li>
                <li className="flex">
                  <a
                    className=" text-charcoal leading-150 font-lato font-normal hover:text-sandy-orange transition-all duration-300 ease-in"
                    href="#"
                  >
                    Term & Conditions
                  </a>
                </li>
                <li className="flex">
                  <a
                    className=" text-charcoal leading-150 font-lato font-normal hover:text-sandy-orange transition-all duration-300 ease-in"
                    href="#"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium font-lato text-base text-dark mb-4">
                Follow Us
              </h4>
              <div className="gap-3 flex">
                <a href="https://www.facebook.com/" target="_blank">
                  <div className="group size-9 flex justify-center items-center rounded-full bg-[linear-gradient(241.09deg,rgba(255,76,36,0.15)_-34.32%,rgba(255,227,108,0.15)_109.3%)] hover:bg-[#1877F2] transition-all duration-300 ease-in-out cursor-pointer">
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="overflow-visible transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
                    >
                      <path
                        d="M5.84188 18V9.78936H8.49534L8.89261 6.5895H5.8418V4.54653C5.8418 3.6201 6.08946 2.98879 7.36862 2.98879L9 2.98799V0.126072C8.71784 0.0871459 7.74937 0 6.6228 0C4.27062 0 2.66027 1.49118 2.66027 4.22972V6.5895H0V9.78936H2.66027V17.9999H5.84188V18Z"
                        className="fill-sandy-orange transition-colors duration-300 group-hover:fill-white"
                      />
                    </svg>
                  </div>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                  <div className="group size-9 flex justify-center items-center rounded-full bg-[linear-gradient(241.09deg,rgba(255,76,36,0.15)_-34.32%,rgba(255,227,108,0.15)_109.3%)] hover:bg-[linear-gradient(45deg,#FEDA75,#FA7E1E,#D62976,#962FBF,#4F5BD5)] transition-all duration-300 ease-in-out cursor-pointer">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
                    >
                      <path
                        d="M0 9C0 5.40486 0 3.60729 0.856692 2.31255C1.23925 1.73439 1.73439 1.23925 2.31255 0.856692C3.60729 0 5.40486 0 9 0C12.5951 0 14.3927 0 15.6874 0.856692C16.2656 1.23925 16.7608 1.73439 17.1433 2.31255C18 3.60729 18 5.40486 18 9C18 12.5951 18 14.3927 17.1433 15.6874C16.7608 16.2656 16.2656 16.7608 15.6874 17.1433C14.3927 18 12.5951 18 9 18C5.40486 18 3.60729 18 2.31255 17.1433C1.73439 16.7608 1.23925 16.2656 0.856692 15.6874C0 14.3927 0 12.5951 0 9ZM13.6596 8.99956C13.6596 11.5729 11.5735 13.659 9.00022 13.659C6.42689 13.659 4.34081 11.5729 4.34081 8.99956C4.34081 6.42624 6.42689 4.34015 9.00022 4.34015C11.5735 4.34015 13.6596 6.42624 13.6596 8.99956ZM9.00022 12.0826C10.7029 12.0826 12.0832 10.7023 12.0832 8.99956C12.0832 7.29686 10.7029 5.91655 9.00022 5.91655C7.29752 5.91655 5.91721 7.29686 5.91721 8.99956C5.91721 10.7023 7.29752 12.0826 9.00022 12.0826ZM13.8438 5.20137C14.4485 5.20137 14.9387 4.7112 14.9387 4.10654C14.9387 3.50189 14.4485 3.01172 13.8438 3.01172C13.2392 3.01172 12.749 3.50189 12.749 4.10654C12.749 4.7112 13.2392 5.20137 13.8438 5.20137Z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        className="fill-[#FF9748] transition-colors duration-300 group-hover:fill-white"
                      />
                    </svg>
                  </div>
                </a>
                <a href="https://in.linkedin.com/" target="_blank">
                  <div className="group size-9 flex justify-center items-center rounded-full bg-[linear-gradient(241.09deg,rgba(255,76,36,0.15)_-34.32%,rgba(255,227,108,0.15)_109.3%)] hover:bg-[#0A66C2] transition-all duration-300 ease-in-out cursor-pointer">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:scale-110"
                    >
                      <path
                        d="M0 2.09091C0 1.48484 0.202709 0.984836 0.608108 0.590909C1.01351 0.196964 1.54055 0 2.18919 0C2.82626 0 3.34169 0.193927 3.73552 0.581818C4.14092 0.981818 4.34363 1.50302 4.34363 2.14545C4.34363 2.72727 4.14672 3.21211 3.7529 3.6C3.3475 4 2.81467 4.2 2.15444 4.2H2.13707C1.49999 4.2 0.984562 4 0.590734 3.6C0.196905 3.2 0 2.69696 0 2.09091ZM0.225869 18V5.85455H4.08301V18H0.225869ZM6.22008 18H10.0772V11.2182C10.0772 10.7939 10.1236 10.4667 10.2162 10.2364C10.3784 9.82424 10.6245 9.47575 10.9546 9.19091C11.2847 8.90605 11.6988 8.76364 12.1969 8.76364C13.4942 8.76364 14.1429 9.67878 14.1429 11.5091V18H18V11.0364C18 9.24242 17.5946 7.88182 16.7838 6.95455C15.973 6.02727 14.9015 5.56364 13.5695 5.56364C12.0753 5.56364 10.9112 6.23636 10.0772 7.58182V7.61818H10.0598L10.0772 7.58182V5.85455H6.22008C6.24324 6.24242 6.25483 7.44847 6.25483 9.47273C6.25483 11.497 6.24324 14.3394 6.22008 18Z"
                        className="fill-sandy-orange transition-colors duration-300 group-hover:fill-white"
                      />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 border-t border-black/16 px-5">
        <p className="font-normal text-charcoal text-base font-lato text-center">
          Copyright © {currentyear} herbert, All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
