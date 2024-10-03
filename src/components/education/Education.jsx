import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";

const Education = () => {
    const { theme } = useContext(ThemeContext);

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch both projects.json and ui.json concurrently
                const [projectsResponse] = await Promise.all([
                    fetch("/education.json"),
                ]);

                // Check if both responses are OK
                if (!projectsResponse.ok) {
                    throw new Error("Failed to fetch data");
                }

                const projectsData = await projectsResponse.json();
                setProjects(projectsData);
            } catch (err) {
                console.error("Error fetching data:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);



    if (loading) return <p>Loading education...</p>;
    if (error) return <p>Error loading education: {error.message}</p>;

    return (
        <div className="education">
            <div className={`pt-20 px-5 lg:px-0 relative ${theme === 'dark' ? 'bg-zinc-900 text-white' : 'bg-white text-zinc-900'} font-semibold mx-auto`}>
                <h3 className="text-2xl uppercase space-grotesk-600">Education</h3>
                <div className="mt-5 grid grid-col2-1 lg:grid-cols-2 gap-5">
                    {
                        projects && projects?.map((item) => {
                            return (
                                <article
                                    key={item.id}
                                    className={`rounded-lg border ${theme === 'dark' ? 'border-zinc-600' : 'border-zinc-200'} p-3 flex item-center gap-3`}
                                >
                                    <figure>
                                        <img src={item?.img} className="w-20 h-24 object-contain" alt="" />
                                    </figure>
                                    <div className="space-y-1 flex flex-col justify-center">
                                        <p className="text-sm space-grotesk-400">{item.start_date} - {item.end_date}</p>
                                        <p className="text-base space-grotesk-700">{item.degree}</p>
                                        <p className="text-sm space-grotesk-400">{item.university}</p>
                                    </div>

                                </article>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
};


export default Education;