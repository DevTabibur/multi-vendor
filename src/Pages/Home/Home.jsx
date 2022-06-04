import React from "react";
import BestSeller from "../components/BestSeller/BestSeller";
import "./Home.css";
import SwiperBanner from "./SwiperBanner";

const Home = () => {
  return (
    <>
      {/* <div className="grid grid-cols-12 gap-x-4">
        <div className="lg:col-span-3"></div>

        <div className="lg:col-span-9 col-span-12">
          <SwiperBanner />
        </div>
      </div> */}

      <BestSeller />
    </>
  );
};

export default Home;
