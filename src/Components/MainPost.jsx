import CloseIcon from "@mui/icons-material/Close";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatIcon from "@mui/icons-material/Chat";
import RepeatIcon from "@mui/icons-material/Repeat";
import SendIcon from "@mui/icons-material/Send";

export const MainPost = ({ id, icon, title, about, img }) => {
  return (
    <div className="w-[555px] h-auto bg-white py-3 px-4 rounded-lg  border-gray-300 border my-3">
      <div className="flex  justify-center gap-3">
        <div className="max-w-12">
          <img src={icon} alt="personLogo" className="w-full rounded-[50%]" />
        </div>
        <div className="text-start">
          <h3 className="text-sm">{title.heading}</h3>
          <p className="text-xs max-w-[80%] text-gray-500">{title.para}</p>
        </div>
        <div className="flex">
          <span className="mr-3">
            <MoreHorizIcon />
          </span>
          <span>
            <CloseIcon />
          </span>
        </div>
      </div>
      <div className="max-w-[90%] text-start my-3 ml-2">
        <p className="text-sm">{about}</p>
      </div>
      <div>
        <img src={img} alt="img" />
      </div>
      <hr className="border-gray-200 border mt-4 w-[99%] ml-1" />
      <div className="flex items-center justify-between px-8 mt-4">
        <span className="flex items-center">
          <ThumbUpIcon />
          <span className="ml-1">Like</span>
        </span>
        <span className="flex items-center">
          <ChatIcon />
          <span className="ml-1">Comment</span>
        </span>
        <span className="flex items-center">
          <RepeatIcon />
          <span className="ml-1">Repost</span>
        </span>
        <span className="flex items-center">
          <SendIcon />
          <span className="ml-1">Send</span>
        </span>
      </div>
    </div>
  );
};
