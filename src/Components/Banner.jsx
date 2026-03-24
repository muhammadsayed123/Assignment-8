import React from "react";
import appStore from "../assets/pic/appStore.png";
import playStore from "../assets/pic/playStore.png";
import hero from '../assets/pic/hero.png'

const Banner = () => {
  return (
    <div className=" text-center py-16">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          We Build <br /> <span className="text-purple-600">Productive</span>{" "}
          Apps
        </h1>

        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex gap-3 ">
          <a href="https://play.google.com/store"  className="flex items-center justify-center gap-2 w-[160px] h-[45px] border-1 border-gray-600 rounded-md hover:bg-gray-700 hover:text-white">
            <img
              src={playStore}
              alt="googl play store"
              className="h-[32px] w-[32px]"
            />
            Google Play
          </a>
          <a href="https://www.apple.com/app-store" className="flex items-center justify-center gap-2 w-[160px] h-[45px] border-1 border-gray-600 rounded-md hover:bg-gray-700 hover:text-white">
            <img
              src={appStore}
              alt="googl play store"
              className="h-[32px] w-[32px]"
            />
            App Store
          </a>
        </div>
        <div className="flex justify-center">
          <img
            src={hero}
            alt="App showcase"
            className="w-full max-w-md rounded-xl"
          />
        </div>
      </div>
      <div className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white py-10">
                <h2 className="text-2xl md:text-3xl font-semibold">
                    Trusted By Millions, Built For You
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-10 mt-6">
                    <div>
                        <p>Total Downloads</p>
                        <h3 className="text-3xl font-bold">29.6M</h3>
                        <p className="text-sm opacity-80">21% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Total Reviews</p>
                        <h3 className="text-3xl font-bold">906K</h3>
                        <p className="text-sm opacity-80">46% More Than Last Month</p>
                    </div>
                    <div>
                        <p>Active Apps</p>
                        <h3 className="text-3xl font-bold">132+</h3>
                        <p className="text-sm opacity-80">31 More Will Launch</p>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Banner;
