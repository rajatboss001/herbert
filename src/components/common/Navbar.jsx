import logo from "../../assets/images/svg/logo.svg"
const Navbar = () => {
    return (
        <header className="bg-white py-5.75">
            <nav className="max-w-295 mx-auto flex justify-between">
                <a href="#">
                    <img width={180} height={54} src={logo} alt="logo" />
                </a>
                <div>
                    <ul className="flex gap-11 mt-4.5">
                        <li>
                            <a className="text-charcoal font-normal text-base block leading-150" href="#">Herbert</a>
                        </li>
                        <li>
                            <a className="text-charcoal font-normal text-base block leading-150" href="#">Sources</a>
                        </li>
                        <li>
                            <a className="text-charcoal font-normal text-base block leading-150" href="#">Our Vision</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
