import React from "react";
import { NetworkLeft } from "./NetworkLeft";
import { NetworkRight } from "./NetworkRight";

export const MyNetwork = () => {
  return (
    <section
      id="myNetwork"
      className="relative bg-[#f4f2ee] min-h-[100vh] pt-14"
    >
      <div id="container" className="max-w-[92%] m-auto">
        <div
          id="row"
          className="flex justify-center text-center pt-5 gap-8"
        >
          <NetworkLeft/>
          <NetworkRight/>
        </div>
      </div>
    </section>
  );
};
