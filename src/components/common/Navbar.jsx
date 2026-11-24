import { useState } from "react"
import logo from "../../assets/images/svg/logo.svg"
// import source from "../../pages/Source"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="py-5.75 relative z-50">

            <nav className="max-w-295 mx-auto">

                {/* TOP NAV */}
                <div className="flex items-center justify-between">

                    {/* LOGO */}
                    <a href="#">
                        <img
                            width={180}
                            height={54}
                            src={logo}
                            alt="logo"
                            className="w-45 h-auto max-sm:w-30.5"
                        />
                    </a>

                    {/* DESKTOP MENU */}
                    <div className="hidden lg:block">
                        <ul className="flex gap-11 mt-4.5">

                            <li>
                                <a
                                    className="text-charcoal font-normal text-base block leading-150 hover:text-dark transition-all duration-300 active:text-black"
                                    href="/"
                                >
                                    Herbert
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-charcoal font-normal text-base block leading-150 hover:text-dark transition-all duration-300"
                                    href="source"
                                >
                                    Sources
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-charcoal font-normal text-base block leading-150 hover:text-dark transition-all duration-300"
                                    href="#"
                                >
                                    Our Vision
                                </a>
                            </li>

                        </ul>
                    </div>

                    {/* MOBILE MENU ICON */}
                    <button
                        onClick={() => setMenuOpen(true)}
                        className="lg:hidden flex items-center w-6 h-6 justify-center text-rich-black"
                    >
                        <svg width="24" height="17" viewBox="0 0 24 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.66859 0.0427928C0.970155 0.155293 0.327968 0.736543 0.0748429 1.47248C-0.0329696 1.79123 -0.0235946 2.43342 0.0889054 2.77092C0.576405 4.18186 2.29203 4.65998 3.45453 3.70842C4.20453 3.09436 4.4014 1.93186 3.90453 1.04123C3.62328 0.539668 3.03266 0.131855 2.45609 0.0381055C2.14203 -0.0134573 1.99203 -0.0134573 1.66859 0.0427928Z" fill="#010101" />
                            <path d="M7.23281 0.55373C6.77813 0.64748 6.36094 0.984981 6.14531 1.43967C6.04219 1.65998 6.02344 1.76779 6.02344 2.10061C6.02344 2.45686 6.04219 2.53654 6.17813 2.81311C6.35156 3.16936 6.5625 3.37561 6.9375 3.54904L7.19531 3.67092L14.8594 3.68498C20.5078 3.69436 22.5891 3.68498 22.7812 3.64748C23.5078 3.49279 24 2.87404 24 2.10061C24 1.46311 23.6906 0.966231 23.1188 0.684981L22.8047 0.530293L15.1172 0.525605C10.8891 0.520918 7.34063 0.534981 7.23281 0.55373Z" fill="#010101" />
                            <path d="M1.64512 6.32404C0.937305 6.45998 0.32793 7.01779 0.0748047 7.75373C-0.0236328 8.04904 -0.0236328 8.71467 0.0748047 9.00998C0.416992 10.0178 1.37793 10.6131 2.39512 10.4584C3.4498 10.2944 4.17637 9.44592 4.17637 8.38185C4.17637 7.02717 2.98574 6.06154 1.64512 6.32404Z" fill="#010101" />
                            <path d="M7.20469 6.83967C6.75469 6.94748 6.35156 7.28029 6.14531 7.72092C6.04219 7.94123 6.02344 8.04904 6.02344 8.38186C6.02344 8.71467 6.04219 8.82248 6.14531 9.04279C6.30469 9.38029 6.59531 9.67092 6.93281 9.83029L7.19531 9.95217L14.9016 9.96623C23.3156 9.98029 22.8656 9.98967 23.2969 9.71779C24.2344 9.12717 24.2344 7.63654 23.2969 7.04592C22.8656 6.77404 23.3156 6.78811 15.0047 6.79279C10.7531 6.79748 7.30313 6.81623 7.20469 6.83967Z" fill="#010101" />
                            <path d="M1.56078 12.624C0.857655 12.8162 0.32328 13.3084 0.0889054 13.9975C-0.0235946 14.3303 -0.0329696 14.9772 0.0748429 15.2912C0.41703 16.2944 1.37328 16.885 2.39984 16.735C3.20141 16.6131 3.83422 16.0694 4.10141 15.2772C4.20922 14.949 4.19984 14.3397 4.08265 13.9975C3.71703 12.9428 2.61078 12.3428 1.56078 12.624Z" fill="#010101" />
                            <path d="M7.09196 13.1584C5.72321 13.6319 5.62008 15.4975 6.93258 16.1115L7.19508 16.2334H14.9998H22.8045L23.1185 16.0787C24.4216 15.4365 24.2482 13.5053 22.8513 13.135C22.6591 13.0834 21.2201 13.0694 14.9763 13.0694C7.74821 13.074 7.32165 13.0787 7.09196 13.1584Z" fill="#010101" />
                        </svg>

                    </button>

                </div>


                {/* ================= MOBILE MENU ================= */}

                <div
                    className={`
                        lg:hidden
                        fixed
                        top-0
                        right-0
                        w-full
                        min-h-screen
                        bg-white
                        z-50
                        transform
                        transition-transform
                        duration-500
                        ease-in-out
                        ${menuOpen
                            ? "-    translate-x-0"
                            : "translate-x-full"
                        }
                    `}
                >

                    {/* MOBILE MENU HEADER */}
                    <div className="flex items-center justify-between px-6 py-3.5">

                        <a href="#">
                            <img
                                width={117}
                                height={36}
                                src={logo}
                                alt="logo"
                                className="w-45 h-auto max-sm:w-30.5"
                            />
                        </a>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center w-6 h-6 justify-center text-rich-black"
                        >
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.8284 8.17157L8.17157 13.8284M8.17157 8.17157L13.8284 13.8284M18.0711 18.0711C14.1658 21.9763 7.83418 21.9763 3.92893 18.0711C0.0236893 14.1658 0.023689 7.83418 3.92893 3.92893C7.83418 0.0236891 14.1658 0.0236891 18.0711 3.92893C21.9763 7.83418 21.9763 14.1658 18.0711 18.0711Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke="#1E1E1E" />
                            </svg>

                        </button>

                    </div>


                    {/* MOBILE LINKS */}
                    <ul className="px-5 mt-11">

                        <li className="border-b border-gray-200 pb-6">
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    text-charcoal
                                    text-base
                                    font-normal
                                "
                            >
                                Herbert
                            </a>
                        </li>

                        <li className="border-b border-gray-200 py-6">
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    text-charcoal
                                    text-base
                                    font-normal
                                "
                            >
                                Sources
                            </a>
                        </li>

                        <li className="pt-6">
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    text-charcoal
                                    text-base
                                    font-normal
                                "
                            >
                                Our Vision
                            </a>
                        </li>

                    </ul>


                    {/* EXISTING CTA */}
                    <div className="px-6">
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
                  mt-8
                  max-lg:text-sm
                "
                        >
                            Start your conversation with Herbert
                        </button>
                    </div>

                </div>

            </nav>
        </header>
    )
}

export default Navbar