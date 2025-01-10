import React from "react";
import img from "../assets/home/featured.jpg"
import "./style.css"
import Title from "./Title";

const LetestSection = () => {
  return (
    <div className="px-52 bg-fixed my-10 pb-20" id="latestImg">
        <Title title="FROM OUR MENU" subtitle="Check it out"/>
      <div className="md:flex bg-slate-500 bg-opacity-40 space-x-10 justify-center items-center">
        <div>
          <img src={img} alt="" />
        </div>
        <div className="p-2">
          <h1 className="text-white text-xl font-semibold">
            March 20, 2023 <br /> WHERE CAN I GET SOME?
          </h1>
          <p className="text-white text-sm mt-2">  Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error voluptate facere, deserunt dolores maiores
            quod nobis quas quasi. Eaque repellat recusandae ad laudantium
            tempore consequatur consequuntur omnis ullam maxime tenetur.
          </p>
          <button  className="btn btn-sm text-white mt-5  btn-outline border-0 border-b-4 ">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default LetestSection;
