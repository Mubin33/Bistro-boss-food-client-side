import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Banner from "../Components/Banner";
import img1 from "../assets/menu/banner3.jpg";
import img2 from "../assets/menu/dessert-bg.jpeg";
import img3 from "../assets/menu/pizza-bg.jpg";
import img4 from "../assets/menu/salad-bg.jpg";
import img5 from "../assets/menu/soup-bg.jpg";
import TodayOffer from "../Components/TodayOffer";
import PopularDish from "../Components/PopularDish";

const Menu = () => {
  let [offered, setOffered] = useState([]);
  let [desserts, setDesserts] = useState([]);
  let [pizza, setPizza] = useState([]);
  let [salad, setSalad] = useState([]);
  let [soup, setSoup] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => {
        setOffered(data.filter((item) => item.category === "offered"));
        setDesserts(data.filter((item) => item.category === "dessert"));
        setPizza(data.filter((item) => item.category === "pizza"));
        setSalad(data.filter((item) => item.category === "salad"));
        setSoup(data.filter((item) => item.category === "soup"));
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>Menu | Bistro Boss</title>
      </Helmet>
      <div>
        <Banner
          title="OUR MENU"
          subtitle="Would you like to try a dish?"
          img={img1}
        />
      </div>

      {/*  */}
      <div>
        <div className="py-10 lg:px-32">
          <div className="grid grid-cols-2 gap-x-12">
            {offered?.map((item) => (
              <PopularDish key={item?._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn btn-outline border-0 border-b-4">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>

      {/*  */}
      <div>
        <Banner
          title="DESSERTS"
          subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={img2}
        />
      </div>

      {/*  */}
      <div>
        <div className="py-10 lg:px-32">
          <div className="grid grid-cols-2 gap-x-12">
            {desserts?.map((item) => (
              <PopularDish key={item?._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn btn-outline border-0 border-b-4">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <Banner
          title="PIZZA"
          subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={img3}
        />
      </div>

      {/*  */}
      <div>
        <div className="py-10 lg:px-32">
          <div className="grid grid-cols-2 gap-x-12">
            {pizza?.map((item) => (
              <PopularDish key={item?._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn btn-outline border-0 border-b-4">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <Banner
          title="SALADS"
          subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={img4}
        />
      </div>

      {/*  */}
      <div>
        <div className="py-10 lg:px-32">
          <div className="grid grid-cols-2 gap-x-12">
            {salad?.map((item) => (
              <PopularDish key={item?._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn btn-outline border-0 border-b-4">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>
      {/*  */}

      <div>
        <Banner
          title="SOUPS"
          subtitle="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          img={img5}
        />
      </div>
      {/*  */}
      <div>
        <div className="py-10 lg:px-32">
          <div className="grid grid-cols-2 gap-x-12">
            {soup?.map((item) => (
              <PopularDish key={item?._id} item={item} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <button className="btn btn-outline border-0 border-b-4">
              ORDER YOUR FAVOURITE FOOD
            </button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default Menu;
