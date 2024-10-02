import { HiOutlineMail } from "react-icons/hi";


const Profile = () => {

    return (
        <div className="Profile">
            <div className="pt-32 relative text-black font-semibold mx-auto">
                <div className="flex items-center gap-5">
                    <img className="h-24 w-24 rounded-full object-cover" src="https://avatar.iran.liara.run/public/boy" alt="" />
                    <div>
                        <h2 className="text-xl space-grotesk-600">Mohammad Sakib Chowdhury</h2>
                        <p className="text-lg text-gray-500 space-grotesk-400">Front-End Developer</p>
                    </div>
                </div>
                <p className="mt-5 text-base text-justify space-grotesk-400 caret-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempore dignissimos quae minima et similique nemo voluptatibus optio recusandae alias voluptatem eligendi non, exercitationem numquam odit, sed deleniti tenetur vero mollitia omnis nobis error ab. Incidunt, quibusdam. Sapiente totam, facere eos, voluptatibus iure tempora mollitia hic dolore iste, magnam dicta! <br /><br />Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione tempore dignissimos quae minima et similique nemo voluptatibus optio recusandae alias voluptatem eligendi non, exercitationem numquam odit, sed deleniti tenetur vero mollitia omnis nobis error ab. Incidunt, quibusdam. Sapiente totam, facere eos, voluptatibus iure tempora mollitia hic dolore iste, magnam dicta!</p>
                <div className="mt-10 space-y-3">
                    <div className="flex gap-2 text-sm space-grotesk-400 items-center">
                        <HiOutlineMail />
                        <a href="">mdsakibchy071@gmail.com</a>

                    </div>
                    <div className="flex gap-2 text-sm space-grotesk-400 items-center">
                        <HiOutlineMail />
                        <a href="">mdsakibchy071@gmail.com</a>

                    </div>
                    <div className="flex gap-2 text-sm space-grotesk-400 items-center">
                        <HiOutlineMail />
                        <a href="">mdsakibchy071@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Profile;