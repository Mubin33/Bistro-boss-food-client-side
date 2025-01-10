import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import Title from "./Title";
import ReactStars from "react-rating-stars-component";
import React from "react";

const Testimonials = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="mt-20 px-10">
      <Title title="Testimonials" subtitle="----What Our Client Say----" />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {data?.map((item) => (
          <SwiperSlide key={item?._id}>
            <div className="md:w-7/12 mx-auto pb-20">
              <div className="flex justify-center my-5">
                <ReactStars
                  count={5}
                  value={item?.rating}
                  onChange={ratingChanged}
                  size={45}
                  activeColor="#ffd700"
                />
                ,
              </div>
              <p className=" text-sm text-gray-600 text-center my-2">
                {item?.details}
              </p>
              <h1 className="text-2xl font-semibold text-center my-2">
                {item?.name}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
