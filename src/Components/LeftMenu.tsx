import React from "react";
import backImg from "../img/back.jpg";
import mainImg from "../img/main.jpg";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import GroupIcon from '@mui/icons-material/Group';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export const LeftMenu = () => {
  return (
    <div className="flex flex-col gap-2 w-[20%]">
      <div className="w-[225px] h-[225px] rounded-xl bg-white  border-gray-300 border">
        <div className="relative">
          <img
            src={backImg}
            alt="backImg"
            className="w-[100%] rounded-t-lg h-[58px]"
          />
          <img
            src={mainImg}
            alt="personImg"
            className="w-[70px] rounded-[50%] ml-4 absolute top-8"
          />
        </div>
        <div className="p-3 mt-10">
          <h2 className="text-start max-w-[95%] m-auto mt-1 text-xl mb-1">
            Muhammad Ammar
          </h2>
          <p className="text-xs max-w-[95%] m-auto text-left mb-1">
            Crafting Digital Masterpieces: Front End Developer | HTML, CSS...
          </p>
          <p className="text-xs text-start max-w-[95%] m-auto text-gray-400">
            Karachi Division, Sindh
          </p>
        </div>
      </div>
      <div className="w-[225px] h-20 rounded-xl bg-white  border-gray-300 border text-start p-2 pl-4">
        <p className="text-xs text-gray-500">
          Job search smarter and stand out
        </p>
        <span className="text-black text-sm line-clamp-none">
          Get hired faster. Try Premium free.
        </span>
      </div>
      <div className="w-[225px] h-[185px] rounded-xl bg-white  border-gray-300 border text-start p-4">
        <div className="flex flex-row justify-between text-center mb-4">
          <span className="text-black text-xs font-bold">Profile viewers</span>
          <strong className="text-blue-500 text-xs">116</strong>
        </div>
        <div className="flex flex-row justify-between text-center mb-4">
          <span className="text-black text-xs font-bold">Post impressions</span>
          <strong className="text-blue-500 text-xs">88</strong>
        </div>
        <hr />
        <div className="flex flex-col text-start gap-1 mt-2">
          <div>
            <TurnedInIcon
              className="w-custom-size h-custom-size"
              style={{ fontSize: "16px" }}
            />
            <span className="text-black text-xs font-bold ml-1">Saved items</span>
          </div>
          <div>
            <GroupIcon
              className="w-custom-size h-custom-size"
              style={{ fontSize: "16px" }}
            />
            <span className="text-black text-xs font-bold ml-1">Groups</span>
          </div>
          <div>
            <CalendarMonthIcon
              className="w-custom-size h-custom-size"
              style={{ fontSize: "16px" }}
            />
            <span className="text-black text-xs font-bold ml-1">Events</span>
          </div>
        </div>
      </div>
    </div>
  );
};
