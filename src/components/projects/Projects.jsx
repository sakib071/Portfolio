import { useEffect, useState } from "react";


const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("/projects.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch projects");
                }
                const data = await response.json();
                setProjects(data);
            } catch (err) {
                console.error("Error fetching project data:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);


    if (loading) return <p>Loading projects...</p>;
    if (error) return <p>Error loading projects: {error.message}</p>;

    return (
        <div className="Works">
            <div className="pt-20 relative text-black font-semibold mx-auto">
                <h3 className="text-2xl uppercase space-grotesk-600">Projects</h3>
                <div className="mt-5 grid grid-cols-2 gap-5">
                    {
                        projects && projects.map((item) => {
                            return (
                                <article
                                    key={item.id}
                                    className="relative overflow-hidden rounded-lg h-[300px] shadow transition hover:shadow-lg group"
                                >
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
                                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                                    />

                                    <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 h-[300px] bottom-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                                        <div className="p-4 sm:p-6">
                                            <a href="#">
                                                <h3 className="my-3 text-2xl space-grotesk-600 text-white">{item?.title}</h3>
                                            </a>
                                            {
                                                Array.isArray(item?.tech_used) && item?.tech_used?.map((tech, index) => (
                                                    <span
                                                        key={`${index}`}
                                                        className="inline-block text-xs text-white/95 px-2 py-1 rounded-full bg-gray-800 mr-1"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))
                                            }
                                            <p className="mt-2 space-grotesk-400 text-sm/relaxed text-white/95">
                                                {item?.description}
                                            </p>
                                        </div>
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

export default Projects;