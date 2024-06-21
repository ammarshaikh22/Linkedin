import PermMediaIcon from "@mui/icons-material/PermMedia";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import FeedIcon from "@mui/icons-material/Feed";
import { useContext, useState } from "react";
import ScrollingData from "./MainData";
import { scrollingDatas } from "./Type";
import { MainPost } from "./MainPost";
import { context } from "../Context/FormContext";

export const MainMenu = () => {
  const {img} = useContext(context);
  const [data] = useState<scrollingDatas[]>(ScrollingData);
  return (
    <div className="relative w-[50%]">
      <div className="w-[555px] h-[118px] bg-white pt-3 px-4 rounded-lg  border-gray-300 border">
        <div className="flex justify-between text-center gap-2">
          <img
            src={img}
            alt="personImg"
            className="w-[50px] rounded-[50%]"
          />
          <input
            type="text"
            placeholder="Start a post, try writing with AI"
            className="w-[467px] h-12 rounded-3xl bg-transparent border-gray-500 border p-6 placeholder:text-black placeholder:text-sm"
          />
        </div>
        <div className="flex text-center justify-between mt-4 pr-10 pl-10">
          <button className="text-sm">
            <PermMediaIcon
              className="w-custom-size h-custom-size"
              style={{ fontSize: "20px" }}
            />{" "}
            Media
          </button>
          <button className="text-sm">
            <CalendarMonthIcon
              className="w-custom-size h-custom-size"
              style={{ fontSize: "20px" }}
            />{" "}
            Event
          </button>
          <button className="text-sm">
            <FeedIcon
              className="w-custom-size h-custom-size"
              style={{ fontSize: "20px" }}
            />{" "}
            Write article
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-2 text-center">
        <hr className="border-gray-300 border mt-4 w-[86%] ml-1" />
        <span className="text-xs text-gray-500 mt-2">
          Sort by: <span className="text-xs font-bold text-black">Top</span>
        </span>
      </div>
      {data.map(({ id, icon, title, about, img }) => {
        return (
          <MainPost
            key={id}
            id={id}
            icon={icon}
            title={title}
            about={about}
            img={img}
          />
        );
      })}
    </div>
  );
};
