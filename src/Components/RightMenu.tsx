import React, { useState } from "react";
import { FollowersData } from "./FollowersData";
import { personData } from "./Type";
export const RightMenu = () => {
  const [data] = useState<personData[]>(FollowersData);
  return (
    <div className="w-[30%] ">
      <div className="w-[300px] h-[396px] bg-white rounded-lg  border-gray-300 border text-start p-3">
        <h3>Add to your feed</h3>
        {data.map(({ id, title, about, img }) => {
          return (
            <div className="mt-5" key={id}>
              <div className="flex text-center justify-start gap-3">
                <img src={img} alt="img" className="w-14 rounded-[50%]" />
                <div>
                  <h4 className="text-start text-sm mb-1">{title}</h4>
                  <p className="text-start text-xs">{about}</p>
                </div>
              </div>
              <button className="w-24 h-9 rounded-2xl ml-[68px] border-black border text-base">
                + Follow
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
