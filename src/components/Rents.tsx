// import React from "react";

// const Rents = () => {
//   return (
//     <div className=" w-full justify-center pl-4 relative">
//       <div className="bg-slate-500 ">
//         <button>Sell</button>
//         <button>Rent</button>
//       </div>
//       {/* <div className="text-white">button</div> */}
//       <div className="bg-white  text-black md:max-w-[1300px] flex items-center space-x-4 p-2 shadow-lg rounded-lg w-full">
//         <div className="relative w-full">
//           <input
//             type="text"
//             className="py-2 pl-10 pr-4 w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             placeholder="Search..."
//           />
//           <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               strokeWidth="1.5"
//               stroke="currentColor"
//               className="w-5 h-5 text-gray-500"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1012 3.75a7.5 7.5 0 004.35 12.9z"
//               />
//             </svg>
//           </div>
//         </div>
//         <div className="flex gap-3">
//           <button className="bg-slate-400 text-white px-10 py-1 rounded-md text-sm hover:bg-slate-500 transition hidden md:block">
//             Property<span className="ml-2">On</span>
//             <span className="ml-2">Map</span>
//           </button>
//           <button className="bg-slate-400 text-white px-6 py-1 rounded-md text-sm hover:bg-slate-500 transition">
//             Filter
//           </button>
//           <button className="bg-green-900 text-white px-6 py-1 rounded-md text-sm hover:bg-slate-500 transition">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Rents;

const Rents = () => {
  return (
    <div className="w-full flex flex-col items-center absolute bottom-0">
      <div className=" flex w-full rounded-md  md:max-w-[1300px]">
        <button className=" py-3 bg-white text-black px-10  rounded-md">
          Sell
        </button>
        <button className="text-white py-3 bg-green-900 px-10  rounded-md">
          Rent
        </button>
      </div>

      <div className="bg-white text-black md:max-w-[1300px] flex items-center space-x-4 p-4   shadow-lg rounded-lg w-full">
        <div className="relative w-full">
          <input
            type="text"
            className="py-2 pl-10 pr-4 w-full border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search..."
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1012 3.75a7.5 7.5 0 004.35 12.9z"
              />
            </svg>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="bg-slate-400 text-white px-10 py-2 rounded-md text-sm hover:bg-slate-500 transition hidden md:block">
            Property<span className="ml-2">On</span>
            <span className="ml-2">Map</span>
          </button>
          <button className="bg-slate-400 text-white px-6 py-2 rounded-md text-sm hover:bg-slate-500 transition">
            Filter
          </button>
          <button className="bg-green-900 text-white px-6 py-2 rounded-md text-sm hover:bg-slate-500 transition">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rents;
