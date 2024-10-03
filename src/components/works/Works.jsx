import { useContext } from "react";
import { PiSuitcaseSimple } from "react-icons/pi";
import { ThemeContext } from "../../providers/ThemeProvider";
const Works = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <div className="Profile">
            <div className={`pt-20 px-5 lg:px-0 relative ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'} font-semibold mx-auto`}>
                <h3 className="text-2xl uppercase space-grotesk-600">Work Experience</h3>
                <div className="mt-5 grid grid-cols-1 gap-5">
                    <ol className="relative border-s border-gray-200 ml-3 mt-5 space-grotesk-400">
                        <li className="mb-10 ms-6">
                            <span className={`absolute flex items-center justify-center w-8 h-8 text-2xl rounded-full -start-4 ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>
                                <PiSuitcaseSimple />
                            </span>
                            <div className={`items-center justify-between p-4 w-full border ${theme === 'dark' ? 'border-zinc-600' : 'border-zinc-200'} rounded-lg shadow-sm sm:flex`}>
                                <time className="mb-1 text-base space-grotesk-400 sm:order-last sm:mb-0">Feb, 2024  - Present</time>
                                <div className="text-sm ">
                                    <p className=" text-base space-grotesk-400">Client: London-based business | Remote</p>
                                    <a href="#" className="font-semibold space-grotesk-700 text-lg text-yellow-400 hover:underline">Freelance Frontend Developer & UI Designer</a>
                                    <p className=" text-base space-grotesk-400">Funny Group</p>
                                </div>
                            </div>
                        </li>
                        <li className="mb-10 ms-6">
                            <span className={`absolute flex items-center justify-center w-8 h-8 text-2xl rounded-full -start-4 ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'}`}>
                                <PiSuitcaseSimple />
                            </span>
                            <div className={`items-center justify-between p-4 w-full border ${theme === 'dark' ? 'border-zinc-600' : 'border-zinc-200'} rounded-lg shadow-sm sm:flex`}>
                                <time className="mb-1 text-base  space-grotesk-400 sm:order-last sm:mb-0">July, 2024 – August, 2024</time>
                                <div className="text-sm ">
                                    <p className=" text-base space-grotesk-400">Client: London-based business | Remote</p>
                                    <a href="#" className="font-semibold space-grotesk-700 text-lg text-yellow-400 hover:underline">Database Manager</a>
                                    <p className=" text-base space-grotesk-400">IRD Foundation, Dhaka</p>
                                </div>
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Works;