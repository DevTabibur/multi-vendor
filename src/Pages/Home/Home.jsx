import React from "react";
import "./Home.css";
import SwiperBanner from "./SwiperBanner";

const Home = () => {
  return (
    <>
      <div className="">
      <div className="grid grid-cols-12 gap-x-4">
        <div className="col-span-3"></div>
        <div className="col-span-9">
          <SwiperBanner />
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
