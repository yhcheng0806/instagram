import React from "react";
import { useSelector } from "react-redux";

const Home = (props) => {
  const state = useSelector(state => state)
  console.log(props,state, "--props");
  return (
    <div className="home-wrapper">
      <div className="box"></div>
      {/* <div className=" transform transition hover:scale-110 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden sm:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="h-48 w-full object-cover md:w-48 bg-gray-400"
              alt=""
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
              href=" "
            >
              Finding customers for your new business
            </a>
            <p className="mt-2 text-gray-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
