import { FaTwitter, FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 py-10 px-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

                {/* Logo and Brand */}
                <div className="flex flex-col items-center md:items-start space-y-2">
                    <a href="#" className="flex items-center space-x-3">
                        <img className='w-28 md:w-fit h-12' src="/logo.png" alt="Logo" />
                    </a>
                    <p className="text-gray-700 w-full md:w-[500px] text-justify dark:text-gray-400 text-sm">
                        <strong>Discover and book the best turfs for your next game with ease.</strong> Whether you&apos;re playing football, cricket, or any sport, we provide access to top-quality turfs near you. Plan your games, find available slots, and reserve your spot all in one place. Make your next match unforgettable with our seamless booking experience!
                    </p>
                </div>

                {/* Sitemap Links Section */}
                <div className="sitemap-links flex flex-col items-center md:items-end space-y-2 md:space-y-1">
                    <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm">About Us</a>
                    <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm">Privacy Policy</a>
                    <a href="/term&conditions" className="text-gray-700 dark:text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm">Terms & Conditions</a>
                    <a href="#" className="text-gray-700 dark:text-gray-400 hover:text-green-500 transition-colors duration-300 text-sm">Contact Us</a>
                </div>

                {/* Social Media Icons Section */}
                <div className="socials flex space-x-6">
                    <a href="#" aria-label="Twitter" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors duration-300">
                        <FaTwitter size={20} />
                    </a>
                    <a href="#" aria-label="LinkedIn" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors duration-300">
                        <FaLinkedinIn size={20} />
                    </a>
                    <a href="#" aria-label="Instagram" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors duration-300">
                        <FaInstagram size={20} />
                    </a>
                    <a href="#" aria-label="Facebook" className="text-gray-600 dark:text-gray-300 hover:text-green-500 transition-colors duration-300">
                        <FaFacebookF size={20} />
                    </a>
                </div>
            </div>

            {/* Footer Bottom Text */}
            <div className="border-t border-gray-300 dark:border-gray-700 mt-6 pt-6 text-center text-gray-700 dark:text-gray-400 text-sm">
                © 2024 Turfhub. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;