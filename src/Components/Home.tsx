import React from "react";
import { LeftMenu } from "./LeftMenu";
import { MainMenu } from "./MainMenu";
import { RightMenu } from "./RightMenu";

export const Home = () => {
  return (
    <section className="relative bg-[#f4f2ee] min-h-[100vh] pt-14">
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
