import React from 'react';

const PopularDish = ({item}) => {
    return (
        <div>
            <div className="grid grid-cols-12 my-3 ">
              <div className="h-16 w-16 col-span-2">
                <img
                  className="h-full w-full border-2 border-green-400 rounded-br-full rounded-bl-full rounded-tr-full "
                  src={item?.image}
                  alt=""
                />
              </div>
              <div className="col-span-8">
                <h1 className="text-xl font-semibold">{item?.name}-------</h1>
                <p className="text-xs text-gray-500 mt-1">{item?.recipe}</p>
              </div>
              <div className="col-span-1">
                <p className="text-[#cc9c2b] text-sm">${item?.price}</p>
              </div>
            </div>
        </div>
    );
};

export default PopularDish;