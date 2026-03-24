import React, {  useState } from "react";
import { FaStar, FaDownload } from "react-icons/fa";

const Installation = () => {
    const [installedApps, setInstalledApps] = useState(() => {
  const stored = JSON.parse(localStorage.getItem("install"));
  return Array.isArray(stored) ? stored : [];
});


    const handleUninstall = (id) => {
        const filtered = installedApps.filter((app) => app.id !== id);
        setInstalledApps(filtered);
        localStorage.setItem("install", JSON.stringify(filtered));
    };


    const [sortOrder, setSortOrder] = useState("default");
    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortOrder === "size") return b.size - a.size;
        if (sortOrder === "rating") return b.ratingAvg - a.ratingAvg;
        return 0;
    });

    return (
        <div className="px-4 md:p-20 bg-[#D2D2D2]">
            <div className="text-center mb-6">
                <h2 className="text-3xl md:text-4xl font-bold">Your Installed Apps</h2>
                <p className="text-gray-500 mt-2">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            <div className="flex justify-between md:items-center md:flex-row flex-col-reverse md:px-18 mb-6">
                <h3 className="font-semibold">
                    <span>({installedApps.length})</span> Apps Found
                </h3>

                <select
                    onChange={(e) => setSortOrder(e.target.value)}
                    className="border px-3 py-2 rounded-md text-sm cursor-pointer"
                >
                    <option value="default">Sort By</option>
                    <option value="size">Sort By Size</option>
                    <option value="rating">Sort By Rating</option>
                </select>
            </div>
            <div className="space-y-4">
                {sortedApps.length > 0 ? (
                    sortedApps.map((app) => (
                        <div
                            key={app.id}
                            className="flex items-center justify-between bg-white shadow-sm border rounded-xl p-4 hover:shadow-md transition"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={app.image}
                                    alt={app.title}
                                    className="w-14 h-14 object-cover rounded-lg bg-gray-100"
                                />
                                <div>
                                    <h3 className="font-semibold text-lg">{app.title}</h3>
                                    <div className="flex items-center gap-3 text-sm text-gray-600 mt-1">
                                        <span className="flex items-center gap-1 text-green-600">
                                            <FaDownload /> {app.downloads}M
                                        </span>
                                        <span className="flex items-center gap-1 text-orange-500">
                                            <FaStar /> {app.ratingAvg}
                                        </span>
                                        <span>{app.size} MB</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => handleUninstall(app.id)}
                                className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500 text-center mt-10">
                        No installed apps found 😕
                    </p>
                )}
            </div>
        </div>
    );
};

export default Installation;
