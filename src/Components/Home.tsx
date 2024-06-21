import { useContext } from "react";
import { LeftMenu } from "./LeftMenu";
import { MainMenu } from "./MainMenu";
import { RightMenu } from "./RightMenu";
import { context } from "../Context/FormContext";

export const Home = () => {
  const { setIsOpen } = useContext(context);
  return (
    <section
      className="lg:max-w-[1248px] lg:m-auto relative bg-[#f4f2ee] min-h-[100vh] pt-14"
      onClick={() => {
        setIsOpen(false);
      }}
    >
      <div className="max-w-[89%] m-auto">
        <div className="flex justify-center text-center pt-5 gap-8">
          <LeftMenu />
          <MainMenu />
          <RightMenu />
        </div>
      </div>
    </section>
  );
};
