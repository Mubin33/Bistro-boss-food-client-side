import React, { useEffect, useState } from 'react';
import Banner from '../Components/Banner';
import img1 from "../assets/shop/banner2.jpg" 
import PopularCard from '../Components/PopularCard';

const Orders = () => { 
    let [category, setCAtegory] = useState("salad")
    let [allData, setAllData] = useState([])
    useEffect(()=>{
        fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => { 
        setAllData(data.filter(item => item.category === category))
      });
    },[category])
    return (
        <div className=' '>
            <Banner title="OUR SHOP" subtitle="Would you like to try a dish?" img={img1}/>
            <div className='mt-28 flex justify-center'>
                <ul className='flex space-x-4'>
                    <li className={`text-xl font-semibold cursor-pointer p-2 ${category === "salad" ? "text-[#9b751d] border-b-2 border-b-[#D99904]" : ""}`} onClick={()=> setCAtegory('salad')}>Salad</li>
                    <li className={`text-xl font-semibold cursor-pointer p-2 ${category === "pizza" ? "text-[#9b751d] border-b-2 border-b-[#9b751d]" : ""}`} onClick={()=> setCAtegory('pizza')}>Pizza</li>
                    <li className={`text-xl font-semibold cursor-pointer p-2 ${category === "soup" ? "text-[#9b751d] border-b-2 border-b-[#9b751d]" : ""}`} onClick={()=> setCAtegory('soup')}>Soups</li>
                    <li className={`text-xl font-semibold cursor-pointer p-2 ${category === "dessert" ? "text-[#9b751d] border-b-2 border-b-[#9b751d]" : ""}`} onClick={()=> setCAtegory('dessert')}>Desserts</li>
                    <li className={`text-xl font-semibold cursor-pointer p-2 ${category === "drinks" ? "text-[#9b751d] border-b-2 border-b-[#9b751d]" : ""}`} onClick={()=> setCAtegory('drinks')}>Drinks</li> 
                </ul>
            </div>
            {/*  */}
      <div>
        <div className="py-10 lg:px-32">
          <div className="grid grid-cols-4 gap-y-3 gap-x-3">
            {allData?.map((item) => (
              <PopularCard key={item?._id} item={item} />
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

export default Orders;