import React from "react";
import AboutCompany from "../assets/images/AboutCompany.png";
import { foundedClients } from "../data/datas";

const About = () => {
  return (
    <section className="mt-32 grid grid-cols-2" id="about">
      <div>
        <img src={AboutCompany} alt="" className="w-[450px]" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-bold">
          About <span className="text-blue-800">Company</span>
        </h1>
        <p className="text-lg">
          Innovative Solutions is a cutting-edge technology company that
          provides innovative solutions for businesses of all sizes. Founded in
          2010, we are dedicated to helping our clients achieve their goals
          through our customized and effective technology solutions. With over a
          decade of experience, we have built a reputation for delivering
          high-quality services to our clients.
        </p>
        <div className="flex gap-16 mt-8">
          {foundedClients.map((item, index) => (
            <div className="flex flex-col items-center italic" key={index}>
              <h1 className="text-3xl font-semibold">{item.value}</h1>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
