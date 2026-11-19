import { useState } from "react"
import { Menu, X } from "lucide-react"
import logo from "../../assets/images/svg/logo.svg"

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
                                    className="text-charcoal font-normal text-base block leading-150 hover:text-dark transition-all duration-300"
                                    href="#"
                                >
                                    Herbert
                                </a>
                            </li>

                            <li>
                                <a
                                    className="text-charcoal font-normal text-base block leading-150 hover:text-dark transition-all duration-300"
                                    href="#"
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
                        className="lg:hidden flex items-center justify-center text-rich-black"
                    >
                        <Menu size={22} strokeWidth={2} />
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
                        ${
                            menuOpen
                                ? "-    translate-x-0"
                                : "translate-x-full"
                        }
                    `}
                >

                    {/* MOBILE MENU HEADER */}
                    <div className="flex items-center justify-between px-5 py-5.75">

                        <a href="#">
                            <img
                                width={180}
                                height={54}
                                src={logo}
                                alt="logo"
                                className="w-45 h-auto max-sm:w-30.5"
                            />
                        </a>

                        <button
                            onClick={() => setMenuOpen(false)}
                            className="flex items-center justify-center text-rich-black"
                        >
                            <X size={22} strokeWidth={2} />
                        </button>

                    </div>


                    {/* MOBILE LINKS */}
                    <ul className="px-5 mt-24">

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    h-20
                                    flex
                                    items-center
                                    justify-center
                                    border-b
                                    border-gray-200
                                    text-charcoal
                                    text-base
                                    font-normal
                                "
                            >
                                Herbert
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    h-20
                                    flex
                                    items-center
                                    justify-center
                                    border-b
                                    border-gray-200
                                    text-charcoal
                                    text-base
                                    font-normal
                                "
                            >
                                Sources
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                onClick={() => setMenuOpen(false)}
                                className="
                                    h-20
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

            </nav>
        </header>
    )
}

export default Navbar