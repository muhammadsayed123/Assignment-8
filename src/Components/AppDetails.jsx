import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useApps from "../Hook/useApps";

const AppDetails = () => {
  const { id } = useParams();
//   const { apps, loading } = useApps();
const {apps,loading}=useApps

  const app = apps?.find((p) => String(p.id) === id);
  const [isInstalled, setIsInstalled] = useState(false);
  useEffect(() => {
    if (app) {
      const installedList = JSON.parse(localStorage.getItem("install")) || [];
      const installed = installedList.find((p) => p.id === app.id);
      setIsInstalled(!!installed);
    }
  }, [app, id]);
  if (loading)
    return (
      <div className="flex flex-col justify-center items-center h-[70vh] text-center transition-all duration-700 ease-in-out">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin-slow"></div>
        <p className="mt-6 text-lg font-semibold text-gray-600 animate-pulse">
          Loading App Details...
        </p>
      </div>
    );

  if (!app) return <p>No App Found</p>;

  const {
    image,
    title,
    companyName,
    description,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = app;
  const handleInstall = () => {
    const existingList = JSON.parse(localStorage.getItem("install")) || [];
    const list = Array.isArray(existingList) ? existingList : [];

    const isDuplicate = list.find((p) => p.id === app.id);
    if (isDuplicate) return;

    const updatedList = [...list, app];
    localStorage.setItem("install", JSON.stringify(updatedList));
    setIsInstalled(true);
    toast.success("App Installed Successfully ✅");
  };

  const formatNumber = (num) => {
    if (num >= 1000000)
      return (num / 1000000).toFixed(1).replace(".0", "") + "M";
    if (num >= 1000) return (num / 1000).toFixed(1).replace(".0", "") + "K";
    return num;
  };

  return (
    <div className="max-w-[1240px] mx-auto my-12 bg-white rounded-2xl shadow-lg p-8 font-sans">
      <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
        <img
          src={image}
          alt={title}
          className="w-36 h-36 object-contain border rounded-xl"
        />

        <div className="flex-1 space-y-2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          <p className="text-sm text-gray-500">
            Developed by{" "}
            <span className="text-indigo-600 font-medium">{companyName}</span>
          </p>
          <p className="text-gray-600 text-sm">{description}</p>

          <div className="flex justify-center md:justify-start gap-8 mt-4">
            <div className="text-center">
              <span className="text-green-600 text-2xl block">⬇</span>
              <p className="font-semibold">{formatNumber(downloads)}</p>
              <p className="text-xs text-gray-500">Downloads</p>
            </div>

            <div className="text-center">
              <span className="text-orange-500 text-2xl block">⭐</span>
              <p className="font-semibold">{ratingAvg}</p>
              <p className="text-xs text-gray-500">Average Rating</p>
            </div>

            <div className="text-center">
              <span className="text-purple-500 text-2xl block">💬</span>
              <p className="font-semibold">{formatNumber(reviews)}</p>
              <p className="text-xs text-gray-500">Total Reviews</p>
            </div>
          </div>

          <button
            onClick={handleInstall}
            disabled={isInstalled}
            className={`${
              isInstalled ? "bg-green-500" : "bg-green-500 hover:bg-green-600"
            } text-white font-medium px-6 py-2 rounded-lg mt-4 transition`}
          >
            {isInstalled ? "Installed" : `Install Now (${size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Ratings</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart
            data={ratings}
            layout="vertical"
            margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" />
            <Tooltip />
            <Bar dataKey="count" fill="#FFA500" barSize={25} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div>
        <h4 className="text-2xl font-semibold">Description</h4>
        <p>{description}</p>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AppDetails;
