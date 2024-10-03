import { useEffect, useState } from "react";
import { BsDot } from "react-icons/bs";

const Articles = () => {

    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch("/articles.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch articles");
                }
                const data = await response.json();
                setArticles(data);
            } catch (err) {
                console.error("Error fetching article data:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    console.log(articles);

    if (loading) return <p>Loading articles...</p>;
    if (error) return <p>Error loading articles: {error.message}</p>;


    return (
        <div className="articles">
            <div className="pt-20 relative text-black font-semibold mx-auto">
                <h3 className="text-2xl uppercase space-grotesk-600">Articles</h3>
                <div className="mt-5 grid grid-cols-1 gap-5">
                    <ol className="space-grotesk-400 space-y-12">
                        {
                            articles && articles?.map((item) => {
                                return (
                                    <li key={item.id} className="items-center justify-between w-full">
                                        <div className="flex gap-3 items-center mb-2 text-sm">
                                            <p className="space-grotesk-400">{item.published}</p>
                                            <BsDot />
                                            <p className="space-grotesk-400">{item.reading_time}</p>
                                        </div>
                                        <p className="text-black space-grotesk-700 text-xl mb-2 hover:underline">{item.title}</p>
                                        <p className="text-base">{item.description}  <a href="#" className="text-gray-800 text-base space-grotesk-400 underline">Continue reading</a></p>

                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default Articles;