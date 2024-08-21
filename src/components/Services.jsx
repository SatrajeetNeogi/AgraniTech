import React from "react";
import Button from "../layouts/Button";
import ServiceCard from "../layouts/ServiceCard";
import img1 from "../assets/img/Service-1.jpeg";
import img2 from "../assets/img/Service-2.jpeg";
import img3 from "../assets/img/Service-3.jpeg";
import img4 from "../assets/img/Service-4.jpeg";
import img5 from "../assets/img/Service-5.jpeg";
import img6 from "../assets/img/Service-6.jpeg";

const Services = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className="text-backgroundColor text-4xl font-semibold text-center lg:text-start">
            Empowering your digital journey
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            Transform your business with our cutting-edge IT services.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <button className="text-brightColor text-xl underline hover:text-hoverColor transition-all cursor-pointer">
            <p>Innovative IT Solutions</p>
          </button>
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <ServiceCard
            img={img1}
            headlines="Cloud Solutions"
            lines="Leverage the power of cloud technology for your business."
          />
          <ServiceCard
            img={img2}
            headlines="Cybersecurity Services"
            lines="Protect your business from evolving cyber threats."
          />
          <ServiceCard
            img={img3}
            headlines="Software Development"
            lines="Custom software solutions to meet your unique threats."
          />
          <ServiceCard
            img={img4}
            headlines="Data Analytics"
            lines="Harness the power of data to drive informed decisions."
          />
          <ServiceCard
            img={img5}
            headlines="IT consulting"
            lines="Expert guidance to optimize your IT infrastructure."
          />
          <ServiceCard
            img={img6}
            headlines="Website Development"
            lines="Create a stunning online presence for your brand."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
