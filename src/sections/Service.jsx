import React from "react";
import { datas } from "../data/datas";

const Service = () => {
  return (
    <section className="mt-32 mb-40" id="services">
      <div>
        <h1 className="text-4xl font-bold text-center">What We Do?</h1>
      </div>
      <div className="flex justify-between mt-12">
        {datas.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:scale-105 transition-all cursor-pointer"
          >
            <img src={item.image} />
            <p className="text-lg font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
      <h3 className="text-center mx-28 mt-12">
        Our services are tailored to meet the unique needs of each client,
        ensuring that we deliver effective solutions that help businesses grow.
      </h3>
    </section>
  );
};

export default Service;
