import React, { useEffect, useState } from "react";
import Title from "./Title";
import PopularDish from "./PopularDish";
import PopularCard from "./PopularCard";

const PopularItem = () => {
  const [data, setData] = useState([]);
  const [moreData, setMoreData] = useState([])

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setData(data.slice(0, 8));
        setMoreData(data.slice(10, 13));
      });
  }, []);

  return (
    <div>
      <div className="py-10 lg:px-32">
        <Title title="FROM OUR MENU" subtitle="---Check it out---" />
        <div className="grid grid-cols-2 gap-x-12">
          {data?.map((item) => (
            <PopularDish key={item?._id} item={item}/>
          ))}
        </div>
      </div>
      <div className="py-20 bg-black my-10">
        <h1 className="text-center text-5xl text-white">
          Contact us: 01641278681
        </h1>
      </div>
      <Title title="CHEF RECOMMENDS" subtitle="---Should Try---" />
      <div className="grid grid-cols-3 gap-4 my-5 lg:px-32">
        {moreData?.map((item) => (
          <PopularCard key={item?._id} item={item}/>
        ))}
      </div>
    </div>
  );
};

export default PopularItem;
