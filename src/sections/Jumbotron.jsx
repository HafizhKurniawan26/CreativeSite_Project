import React from "react";
import JumbotronImg from "../assets/images/Jumbotron.png";

const Jumbotron = () => {
  return (
    <section
      className="h-[80dvh] flex justify-between items-center mt-4"
      id="home"
    >
      <div className="h-[50%] my-auto flex flex-col justify-between pr-16">
        <div className="text-6xl font-bold">
          <h1>Creative</h1>
          <h1 className="text-blue-800 underline underline-offset-8">Site</h1>
        </div>
        <p className="text-xl">
          Twiscode specializes in developing high-performing mobile and web
          applications.
        </p>
      </div>
      <img src={JumbotronImg} alt="" className="h-[500px]  rounded-lg" />
    </section>
  );
};

export default Jumbotron;
