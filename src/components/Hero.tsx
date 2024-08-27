import React from "react";
import { CiSearch } from "react-icons/ci";

const Hero: React.FC = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-photo/mumbai-skyline-skyscrapers-construction_469504-21.jpg?t=st=1724756448~exp=1724760048~hmac=78f633484b332d52fc83d0052657cb8276824cc60e5996bf0b16eb7cbc42a829&w=900')`,
      }}
    >
      <div className="absolute inset-0 bg-blue-400 opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
        <h1 className="text-white text-center text-4xl md:text-6xl font-serif mb-4 mt-10 md:mt-0">
          Find Your Perfect Space Now.
        </h1>
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full md:max-w-[1000px]">
          <div className="flex mb-4 border-b border-slate-400">
            <div className="flex-1 text-center py-2 border-r border-slate-400">
              <p className="text-2xl font-serif ">BUY</p>
            </div>
            <div className="flex-1 text-center py-2">
              <p className="text-2xl font-serif ">SELL</p>
            </div>
          </div>
          <div className="relative">
            <CiSearch
              size={24}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600"
            />
            <input
              type="text"
              placeholder="Enter Location"
              className="w-full pl-10 py-2 border border-slate-400 rounded-full bg-gray-100 outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex mb-4 mt-4 border border-slate-400">
            <div className="flex-1 text-center py-2 border-r border-slate-400">
              <p className="text-2xl font-serif ">Type</p>
            </div>
            <div className="flex-1 text-center py-2">
              <p className="text-2xl font-serif ">Bed</p>
            </div>
          </div>

          <div className="flex mb-4 mt-4 border border-slate-400">
            <div className="flex-1 text-center py-2 border-r border-slate-400">
              <p className="text-2xl font-serif text-gray-400">Minimum Price</p>
            </div>
            <div className="flex-1 text-center py-2">
              <p className="text-2xl font-serif text-gray-400">Maximum Price</p>
            </div>
          </div>
          <div className=" w-full">
            <button className="bg-blue-600 w-full py-2 rounded-md text-white font-semibold text-xl">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
