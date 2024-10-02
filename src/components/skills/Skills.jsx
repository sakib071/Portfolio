import { FaFigma, FaHtml5, FaReact, FaGitAlt, FaGithub, FaJsSquare, FaSlack, FaDiscord } from "react-icons/fa";
import { SiAdobexd, SiAdobeillustrator, SiTailwindcss, SiVitest } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { RxNotionLogo } from "react-icons/rx";

const Skills = () => {

    return (
        <div name="skills" className="pt-20">
            <div className="relative text-black mx-auto">
                <h3 className="text-2xl uppercase space-grotesk-600">Skills</h3>
                <div className="flex gap-20 mt-5 text-gray-700">
                    <div className="space-y-3">
                        <p>Design Tools:</p>
                        <p>Development:</p>
                        <p>Collaboration:</p>
                        <p>Soft Skills:</p>
                    </div>
                    <div className="space-y-3">
                        <ul className="flex gap-2 justify-start items-start text-left">
                            <li className="flex gap-2 items-center"><FaFigma />Figma,</li>
                            <li className="flex gap-2 items-center"><SiAdobexd />Adobe XD,</li>
                            <li className="flex gap-2 items-center"><SiAdobeillustrator />Adobe illustrator</li>
                        </ul>
                        <ul className="flex gap-2 justify-start">
                            <li className="flex gap-2 items-center"><FaReact />React,</li>
                            <li className="flex gap-2 items-center"><SiVitest />Vite,</li>
                            <li className="flex gap-2 items-center"><FaJsSquare />JavaScript,</li>
                            <li className="flex gap-2 items-center"><FaHtml5 />HTML 5,</li>
                            <li className="flex gap-2 items-center"><IoLogoCss3 />CSS,</li>
                            <li className="flex gap-2 items-center"><SiTailwindcss />Tailwind CSS</li>
                        </ul>
                        <ul className="flex gap-2">
                            <li className="flex gap-2 items-center"><FaGitAlt />Git,</li>
                            <li className="flex gap-2 items-center"><FaGithub />GitHub,</li>
                            <li className="flex gap-2 items-center"><FaSlack />Slack,</li>
                            <li className="flex gap-2 items-center"><RxNotionLogo />Notion,</li>
                            <li className="flex gap-2 items-center"><FaDiscord />Discord</li>
                        </ul>
                        <ul className="flex gap-2">
                            <li>Problem-solving,</li>
                            <li>Attention to details,</li>
                            <li>Time management,</li>
                            <li>Project planning</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;