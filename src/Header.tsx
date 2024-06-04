import { Link } from "react-router-dom";
import img from "./img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import NotificationsIcon from "@mui/icons-material/Notifications";
import mainImg from "./img/main.jpg";
import AppsIcon from '@mui/icons-material/Apps';
export const Header = () => {
  return (
    <section className="fixed py-[3px] shadow-sm w-full z-10 bg-white">
      <div className="max-w-[92%] m-auto">
        <div className="flex justify-between items-center">
          <div className="w-80 flex justify-between text-center relative">
            <img src={img} alt="linkedin logo" className="max-w-9" />
            <span className="absolute left-14 top-1">
              <SearchIcon className="text-xs" />
            </span>
            <input
              type="text"
              placeholder="       Search"
              className="bg-gray-200 p-3 w-[280px] h-[34px] rounded-md"
            />
          </div>
          <div className="relative after:absolute after:content-[''] after:right-0 after:top-0  after:bg-gray-300 after:h-12 after:w-[1px] after:ml-5 after:left-[480px]">
            <ul className="flex justify-center text-center gap-8 text-sm ">
              <li className=" hover:text-black text-gray-600">
                <Link to="/">
                  <HomeIcon />
                  <li className="text-sm">Home</li>
                </Link>
              </li>
              <li className=" hover:text-black text-gray-600">
                <Link to="mynetwork">
                  <GroupIcon />
                  <li className="text-sm">My Network</li>
                </Link>
              </li>
              <li className=" hover:text-black text-gray-600">
                <Link to="jobs">
                  <WorkIcon />
                  <li className="text-sm">Jobs</li>
                </Link>
              </li>
              <li className=" hover:text-black text-gray-600">
                <Link to="messaging">
                  <LocalPostOfficeIcon />
                  <li className="text-sm">Messaging</li>
                </Link>
              </li>
              <li className=" hover:text-black text-gray-600">
                <Link to="notifications">
                  <NotificationsIcon />
                  <li className="text-sm">Notifications</li>
                </Link>
              </li>
              <li className=" hover:text-black text-gray-600">
                <Link to="me">
                  <img
                    src={mainImg}
                    alt="personImg"
                    className="w-[25px] rounded-[50%]"
                  />
                  <li className="text-sm">Me</li>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex text-center justify-center ">
              <li className=" hover:text-black text-gray-600">
                <Link to="">
                  <AppsIcon />
                  <li className="text-sm">For Business</li>
                </Link>
              </li>
              <Link to="">
                <p className="max-w-[80%] m-auto text-xs w-40 text-orange-800 underline mt-2">
                  Get hired faster. Try premium free
                </p>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
