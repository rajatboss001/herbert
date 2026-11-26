
import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/svg/logo.svg";
import { navData } from "../../utils/helper";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Active link styling
  const getNavClass = ({ isActive }) =>
  `relative block text-base leading-[1.5] transition-all duration-300
  after:absolute after:-bottom-1 after:left-1/2
  after:h-[3px] after:w-[31px] after:-translate-x-1/2
  after:rounded-[10px] after:bg-dark
  after:transition-all after:duration-300
  ${
    isActive
      ? "font-semibold text-charcoal after:opacity-100"
      : "font-normal text-charcoal after:opacity-0"
  }`;

  return (
    <header className="relative z-50 py-5.75">
      <nav className="mx-auto max-w-295">

        {/* TOP NAV */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            <img
              width={180}
              height={54}
              src={logo}
              alt="Herbert logo"
              className="h-auto w-45 max-sm:w-30.5"
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <div className="mt-4.5 hidden lg:block">
            <ul className="flex gap-11">
              {navData.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    end={item.path === "/"}
                    className={getNavClass}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            className="flex h-6 w-6 items-center justify-center text-rich-black lg:hidden"
          >
            <svg
              width="24"
              height="17"
              viewBox="0 0 24 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.66859 0.0427928C0.970155 0.155293 0.327968 0.736543 0.0748429 1.47248C-0.0329696 1.79123 -0.0235946 2.43342 0.0889054 2.77092C0.576405 4.18186 2.29203 4.65998 3.45453 3.70842C4.20453 3.09436 4.4014 1.93186 3.90453 1.04123C3.62328 0.539668 3.03266 0.131855 2.45609 0.0381055Z"
                fill="#010101"
              />
              <path
                d="M7.23281 0.55373C6.77813 0.64748 6.36094 0.984981 6.14531 1.43967C6.04203 1.65998 6.02344 1.76779 6.02344 2.10061C6.02344 2.45686 6.04203 2.53654 6.17813 2.81311C6.35156 3.16936 6.5625 3.37561 6.9375 3.54904L7.19531 3.67092L14.8594 3.68498C20.5078 3.69436 22.5898 3.68498 22.7812 3.64748C23.5078 3.49279 24 2.87404 24 2.10061C24 1.46311 23.6906 0.966231 23.1188 0.684981L22.8047 0.530293Z"
                fill="#010101"
              />
              <path
                d="M1.64512 6.32404C0.937305 6.45998 0.32793 7.01779 0.0748047 7.75373C-0.0236328 8.04904 -0.0236328 8.71467 0.0748047 9.00998C0.416992 10.0178 1.37793 10.6131 2.39512 10.4584C3.4498 10.2944 4.17637 9.44592 4.17637 8.38185Z"
                fill="#010101"
              />
              <path
                d="M7.20469 6.83967C6.75413 6.94748 6.35156 7.28029 6.14531 7.72092C6.04203 7.94123 6.02344 8.04904 6.02344 8.38186C6.02344 8.71467 6.04203 8.82248 6.14531 9.04279C6.30469 9.38029 6.59531 9.67092 6.93281 9.83029L7.19531 9.95217L14.9016 9.96623C23.3156 9.98067 22.8656 9.98967 23.2969 9.71779C24.2344 9.12717 24.2344 7.63654 23.2969 7.04592Z"
                fill="#010101"
              />
              <path
                d="M1.56078 12.624C0.857655 12.8162 0.32328 13.3084 0.088905 13.9975C-0.023594 14.3303 -0.032969 14.9772 0.074843 15.2912C0.41703 16.2944 1.37328 16.885 2.39984 16.735C3.20141 16.6134 3.83422 16.0694 4.10141 15.2772Z"
                fill="#010101"
              />
              <path
                d="M7.09196 13.1584C5.72321 13.6319 5.62008 15.4975 6.93258 16.1115L7.19508 16.2334H14.9998H22.8045L23.1185 16.0787C24.4216 15.4365 24.2482 13.5053 22.8513 13.135Z"
                fill="#010101"
              />
            </svg>
          </button>
        </div>

        {/* MOBILE MENU */}
        <div
          className={`fixed top-0 right-0 z-50 min-h-screen w-full bg-white transition-transform duration-500 ease-in-out lg:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >

          {/* MOBILE HEADER */}
          <div className="flex items-center justify-between px-6 py-3.5">

            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              <img
                width={117}
                height={36}
                src={logo}
                alt="Herbert logo"
                className="h-auto w-30.5"
              />
            </NavLink>

            {/* CLOSE BUTTON */}
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              className="flex h-6 w-6 items-center justify-center"
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.8284 8.17157L8.17157 13.8284M8.17157 8.17157L13.8284 13.8284M18.0711 18.0711C14.1658 21.9763 7.83418 21.9763 3.92893 18.0711C0.0236893 14.1658 0.023689 7.83418 3.92893 3.92893C7.83418 0.0236891 14.1658 0.0236891 18.0711 3.92893C21.9763 7.83418 21.9763 14.1658 18.0711 18.0711Z"
                  stroke="#1E1E1E"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* MOBILE LINKS */}
          <ul className="mt-11 px-5">
            {navData.map((item) => (
              <li
                key={item.id}
                className="border-b border-gray-200 py-6"
              >
                <NavLink
                  to={item.path}
                  end={item.path === "/"}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `relative flex items-center justify-center text-base transition-all duration-300
                    after:absolute after:-bottom-2 after:left-1/2 after:h-0.5
                    after:-translate-x-1/2 after:bg-[#FF492B]
                    after:transition-all after:duration-300
                    ${
                      isActive
                        ? "font-semibold text-charcoal after:w-12"
                        : "font-normal text-charcoal after:w-0"
                    }`
                  }
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="px-6">
            <button
              type="button"
              className="group relative mt-8 block w-full cursor-pointer overflow-hidden rounded-lg border border-transparent bg-sandy-orange px-6 py-3.5 font-rubik text-sm font-semibold leading-[1.19] text-white transition-all duration-500 ease-in-out hover:border-sandy-orange hover:bg-transparent hover:text-sandy-orange lg:text-base"
            >
              Start your conversation with Herbert
            </button>
          </div>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
