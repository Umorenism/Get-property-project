import axios from "axios";
import { useEffect } from "react";
import Card from "./Card";

const Search = () => {
  useEffect(() => {
    axios
      .get("")
      .then((res) => {
        console.log("", res.data);
      })
      .catch((err) => {
        console.log("errr", err);
      });
  });
  return (
    <div className=" min-h-screen  flex flex-col">
      <div className="bg-gray-500 flex items-center"></div>
      <div className="min-h-screen">
        <div className="p-4">
          <h1 className="text-4xl font-bold mt-4">
            Discover Our Futured Listing
          </h1>
        </div>
        <div className="grid md:w-full grid-cols-1 md:grid-cols-3 gap-3 p-4 ">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Search;
