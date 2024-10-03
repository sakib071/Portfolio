import { useState, useContext } from "react";
import { Link } from 'react-scroll';
import { ThemeContext } from "../../providers/ThemeProvider";

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the navbar
    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const navOptions = <>
        <li>
            <Link
                to='profile'
                spy={true}
                smooth={true}
                duration={300}
                offset={-100} // Adjust the offset to account for the navbar height
                activeClass="active"
                className="hover:text-yellow-500 transition-colors text-base space-grotesk-400 cursor-pointer"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                to='projects'
                spy={true}
                smooth={true}
                duration={300}
                offset={-100}
                activeClass="active"
                className="hover:text-yellow-500 transition-colors text-base space-grotesk-400 cursor-pointer"
            >
                Projects
            </Link>
        </li>
        <li>
            <Link
                to='works'
                spy={true}
                smooth={true}
                duration={300}
                offset={-100}
                activeClass="active"
                className="hover:text-yellow-500 transition-colors text-base space-grotesk-400 cursor-pointer"
            >
                Work
            </Link>
        </li>
        <li>
            <Link
                to='articles'
                spy={true}
                smooth={true}
                duration={300}
                offset={-100}
                activeClass="active"
                className="hover:text-yellow-500 transition-colors text-base space-grotesk-400 cursor-pointer"
            >
                Articles
            </Link>
        </li>
    </>

    return (
        <div className="flex justify-center space-grotesk-400">
            <div className={`navbar max-w-3xl lg:border ${theme === 'dark' ? 'bg-zinc-900 text-white border-zinc-700' : 'bg-white text-zinc-900 border-zinc-300'}  min-h-[12px] fixed w-full mx-auto lg:px-5 lg:top-5 lg:rounded-full lg:shadow-xl z-20`}>
                <div className="navbar-start flex justify-between w-full">
                    <a href="/" className="hidden lg:block lg:text-lg">
                        <p>Sakib</p>
                    </a>
                    {/* Mobile Menu Toggle Button */}
                    <div className="lg:hidden">
                        <button
                            type="button"
                            className={`relative size-10 m-1 flex justify-center items-center gap-2 rounded-lg font-medium  text-zinc-400 shadow-sm border ${theme === 'dark' ? 'border-zinc-400' : 'border-zinc-400'}`}
                            aria-expanded={isOpen}
                            onClick={handleToggle}
                        >
                            {/* Menu Icon */}
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            ) : (
                                // Close Icon
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            )}
                            <span className="sr-only">Toggle navigation</span>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden absolute top-[100%] left-0 right-0 transition-all duration-500 ease-in-out overflow-hidden z-50 rounded-b-lg ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'} ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}
                    style={{ transition: 'max-height 0.5s ease-in-out, opacity 0.5s ease-in-out' }}
                >
                    <ul className="flex flex-col gap-5 mt-5 px-4 py-3">
                        {navOptions}
                    </ul>
                </div>

                <div className="navbar-center hidden lg:flex">

                </div>

                <div className="navbar-end hidden lg:flex gap-4">
                    <ul className="flex gap-10 px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
