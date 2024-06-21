import { useContext } from "react";
import { context } from "../Context/FormContext";

export const MeMenu = (_props: any) => {
  const { setIsOpen, fullN, img } = useContext(context);

  const handleClick = () => {
    setIsOpen(false);
    if (_props.setIsActive) {
      _props.setIsActive(!_props.isActive);
    }
  };

  return (
    <div className="absolute -right-9 w-[265px] h-[464px] rounded-xl bg-white border-gray-300 border pt-4 p-3 mt-3 overflow-y-scroll">
      <div className="relative flex items-start text-start justify-center gap-3">
        <img src={img} alt="logo" className="min-h-[60px] max-w-[60px] rounded-[50%]" />
        <div>
          <h3 className="text-base text-black">
            {fullN.fName + " " + fullN.lName}
          </h3>
          <br />
          <p>
            Crafting Digital Masterpieces: Front End Developer | HTML, CSS,
            JavaScript, TypeScript, ReactJS Expert Currently working on
            Generative AI Engineering from Governor Sindh IT Initiative
          </p>
        </div>
      </div>
      <button
        className="text-sm text-blue-600 mt-2 w-[95%] rounded-xl h-6  bg-transparent border border-blue-600"
      >
        View Profile
      </button>
      <hr className="border-gray-200 border mt-2 w-[100%]" />
      <div className="text-start px-2 mt-2">
        <h5 className="text-lg text-black mb-2">Account</h5>
        <p className="text-sm mb-2">Try Premium for PKR0</p>
        <p className="text-sm mb-2">Setting & Privacy</p>
        <p>Help</p>
        <p className="text-sm">Language</p>
      </div>
      <hr className="border-gray-200 border mt-2 w-[100%]" />
      <div className="text-start px-2 mt-2">
        <h5 className="text-lg text-black mb-2">Manage</h5>
        <p className="text-sm mb-2">Posts & Activity</p>
        <p className="text-sm mb-2">Job Posting Account</p>
      </div>
      <hr className="border-gray-200 border mt-2 w-[100%]" />
      <div className="text-start px-2 mt-2">
        <p className="text-sm mb-2" onClick={handleClick}>
          {_props.isActive ? "Sign out" : "Sign in"}
        </p>
      </div>
    </div>
  );
};
