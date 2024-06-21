import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export const NetworkLeft = () => {
  return (
    <div className="w-[30%] flex flex-col gap-4 ">
      <div className="flex items-center justify-between bg-white rounded-lg h-[54px] p-3 w-[300px] shadow-sm">
        <h3 className="ml-3 font-semibold">Manage My NetWork</h3>
        <span>
          <KeyboardArrowDownIcon />
        </span>
      </div>
      <div className="w-[300px] h-[250px] bg-white rounded-lg shadow-sm">
        <div>
        <span>Muhammad Ammar</span> 
        , unlock your full potential with LinkedIn Premium
        </div>
        <div>
            <img src="../img/follower1.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};
