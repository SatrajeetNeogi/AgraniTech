import React from "react";
import img from "../assets/img/about-1.jpeg";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <p className="text-center lg:text-start">EMPOWERING INNOVATIONS</p>
        <h1 className="text-backgroundColor text-4xl font-semibold text-center lg:text-start">
          Your partner in IT solutions
        </h1>
        <p className=" text-justify lg:text-start">
          At AgraniTech, we provide cutting-edge IT services and products
          tailored to meet the unique needs of businesses. Our dedicated team in
          [location] harnesses the latest technology to deliver effective
          solutions that drive growth and efficiency. We prioritize your success
          by offering expert guidance, innovative strategies, and unparalleled
          support. Together, let's navigate the digital landscape and unlock new
          opportunities for your organization.
        </p>
        <button className="text-brightColor text-xl underline hover:text-hoverColor transition-all cursor-pointer">
          <p>Get in Touch</p>
        </button>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
