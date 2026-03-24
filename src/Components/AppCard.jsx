import React from 'react';

const AppCard = ({app}) => {
    const { image, title, description, downloads, ratingAvg } = app;

    return (
       <div className="w-[180px] bg-white rounded-lg p-3 shadow-md text-center font-sans max-w-[1240px] mx-auto hover:scale-105 transition ease-in-out duration-300">
            <img
                src={image}
                alt="App"
                className="w-full h-[140px] object-cover rounded-md mb-3"
            />
            <div className="text-sm font-semibold text-slate-900 mb-2">
                <h3>{title}:</h3>
                <p>{description}</p>
            </div>
            <div className="flex justify-between text-xs px-2">
                <div className="flex items-center gap-1 bg-emerald-50 text-emerald-500 px-2 py-1 rounded-md">
                    <span className="text-xs">⬇</span>
                    <span>{downloads}</span>
                </div>
                <div className="flex items-center gap-1 bg-orange-50 text-orange-500 px-2 py-1 rounded-md">
                    <span className="text-xs">⭐</span>
                    <span>{ratingAvg}</span>
                </div>
            </div>
        </div>
    );
};

export default AppCard;