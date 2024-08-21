import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" h-[80vh] flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home-1.jpeg')] bg-no-repeat bg-cover ">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-white text-5xl font-bold leading-tight">
          Empowering your
        </h1>
        <h1 className="text-white text-5xl font-bold leading-tight">
          business
        </h1>
        <h3 className="text-[25px]">Innovative IT Solutions</h3>

        <Button title="View Services" />
      </div>
    </div>
  );
};

export default Home;
