import React, { useContext, useState } from "react";
import backImg from "../img/bg.avif";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import GroupIcon from "@mui/icons-material/Group";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { context } from "../Context/FormContext";

export const LeftMenu = () => {
  const [back, setBack] = useState(backImg)
  const { img, setImg } = useContext(context);
  const { fullN } = useContext(context);
  const fullName = `${fullN.fName} ${fullN.lName}`;
  function handleFiles(e: any) {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const file = fileList[0];
      const imageUrl = URL.createObjectURL(file);
      setImg(imageUrl)
    }
  }
  function handleBack(e: any) {
    const fileList = e.target.files;
    if (fileList && fileList[0]) {
      const file = fileList[0];
      const imageUrl = URL.createObjectURL(file);
      setBack(imageUrl)
    }
  }
  return (
    <div className="flex flex-col gap-2 w-[20%]">
      <div className="w-[225px] h-[225px] rounded-xl bg-white border-gray-300 border">
        <div className="relative">
        <label htmlFor="file">
        <img
            src={back}
            alt="backImg"
            className="w-[100%] rounded-t-lg h-[58px]"
          />
          </label>
          <input
            type="file"
            id="file"
            multiple
            onChange={handleBack}
            style={{ display: "none" }}
          />
          <label htmlFor="fileInput">
            <img
              src={img}
              alt="personImg"
              className="max-w-[69px] min-w-[69px] rounded-[50%] ml-4 absolute top-8 cursor-pointer min-h-[69px]"
            />
          </label>
          <input
            type="file"
            id="fileInput"
            multiple
            onChange={handleFiles}
            style={{ display: "none" }}
          />
        </div>
        <div className="p-3 mt-10">
          <h2 className="text-start max-w-[95%] m-auto mt-1 text-xl mb-1">
            {fullName}
          </h2>
          <p className="text-xs max-w-[95%] m-auto text-left mb-1">
            Crafting Digital Masterpieces: Front End Developer | HTML, CSS...
          </p>
          <p className="text-xs text-start max-w-[95%] m-auto text-gray-400">
            Karachi Division, Sindh
          </p>
        </div>
      </div>
      <div className="w-[225px] h-20 rounded-xl bg-white border-gray-300 border text-start p-2 pl-4">
        <p className="text-xs text-gray-500">
          Job search smarter and stand out
        </p>
        <span className="text-black text-sm line-clamp-none">
          Get hired faster. Try Premium free.
        </span>
      </div>
      <div className="w-[225px] h-[185px] rounded-xl bg-white border-gray-300 border text-start p-4">
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
            <span className="text-black text-xs font-bold ml-1">
              Saved items
            </span>
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
