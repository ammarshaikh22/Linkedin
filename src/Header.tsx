import { NavLink, useLocation } from "react-router-dom";
import img1 from "./img/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import GroupIcon from "@mui/icons-material/Group";
import WorkIcon from "@mui/icons-material/Work";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AppsIcon from "@mui/icons-material/Apps";
import { LoginPage } from "./Components/LoginPage";
import { useContext, useState, useEffect } from "react";
import { MeMenu } from "./Components/MeMenu";
import { context } from "./Context/FormContext";

export const Header = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { isOpen, setIsOpen, img } = useContext(context);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location, setIsOpen]);

  return (
    <header className="fixed py-[3px] shadow-sm w-full z-10 bg-white">
      <section>
        <div className="max-w-[92%] m-auto">
          <div className="flex justify-between items-center">
            <div className="w-80 flex justify-between text-center relative">
              <img src={img1} alt="linkedin logo" className="max-w-9" />
              <span className="absolute left-14 top-1">
                <SearchIcon className="text-xs" />
              </span>
              <input
                type="text"
                placeholder="       Search"
                className="bg-gray-200 p-3 w-[280px] h-[34px] rounded-md"
              />
            </div>
            <nav>
              <div className="relative after:absolute after:content-[''] after:right-0 after:top-0  after:bg-gray-300 after:h-12 after:w-[1px] after:ml-5 after:left-[480px]">
                <ul className="flex justify-center text-center gap-8 text-sm ">
                  <li className=" hover:text-black text-gray-600">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                      to="/"
                    >
                      <HomeIcon />
                      <li className="text-sm">Home</li>
                    </NavLink>
                  </li>
                  <li className=" hover:text-black text-gray-600">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                      to="mynetwork"
                    >
                      <GroupIcon />
                      <li className="text-sm">My Network</li>
                    </NavLink>
                  </li>
                  <li className=" hover:text-black text-gray-600">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                      to="jobs"
                    >
                      <WorkIcon />
                      <li className="text-sm">Jobs</li>
                    </NavLink>
                  </li>
                  <li className=" hover:text-black text-gray-600">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                      to="messaging"
                    >
                      <LocalPostOfficeIcon />
                      <li className="text-sm">Messaging</li>
                    </NavLink>
                  </li>
                  <li className=" hover:text-black text-gray-600">
                    <NavLink
                      className={({ isActive }) =>
                        isActive ? "underline" : ""
                      }
                      to="notifications"
                    >
                      <NotificationsIcon />
                      <li className="text-sm">Notifications</li>
                    </NavLink>
                  </li>
                  <li className="relative hover:text-black text-gray-600 cursor-pointer">
                    <div
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                    >
                      <img
                        src={img}
                        alt="personImg"
                        className="min-h-[25px] max-w-[25px] rounded-[50%]"
                      />
                      <li className="text-sm">Me</li>
                      {isOpen && (
                        <MeMenu setIsActive={setIsActive} isActive={isActive} />
                      )}
                    </div>
                  </li>
                </ul>
                <LoginPage setIsActive={setIsActive} isActive={isActive} />
              </div>
            </nav>
            <div>
              <ul className="flex text-center justify-center ">
                <li className=" hover:text-black text-gray-600">
                  <NavLink to="">
                    <AppsIcon />
                    <li className="text-sm">For Business</li>
                  </NavLink>
                </li>
                <NavLink to="">
                  <p className="max-w-[80%] m-auto text-xs w-40 text-orange-800 underline mt-2">
                    Get hired faster. Try premium free
                  </p>
                </NavLink>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
};
