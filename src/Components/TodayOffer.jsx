import React, { useEffect, useState } from 'react';
import Title from './Title';
import PopularDish from './PopularDish';

const TodayOffer = ({title, subtitle}) => {
      const [today, setToday] = useState([]); 
    
      useEffect(() => {
        fetch("http://localhost:5000/menu")
          .then((res) => res.json())
          .then((data) => {
            setToday(data.slice(20, 28));
             
          });
      }, []);
    return (
        <div>
            <div className="py-10 lg:px-32">
        <Title title={title} subtitle={subtitle} />
        <div className="grid grid-cols-2 gap-x-12">
          {today?.map((item) => (
            <PopularDish item={item}/>
          ))}
        </div>
        <div className='flex justify-center mt-8'>
            <button className='btn btn-outline border-0 border-b-4'>ORDER YOUR FAVOURITE FOOD</button>
        </div>
      </div>
        </div>
    );
};

export default TodayOffer;