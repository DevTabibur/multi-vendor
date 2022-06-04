import React from "react";
import "./BestSeller.css";
import BoxBanner from "../../../assets/images/banner-box.jpg";
import ShowProducts from "./ShowProducts/ShowProducts";
import useBestSeller from "../../Hooks/useBestSeller";

const BestSeller = () => {
  const [products] = useBestSeller()

  return (
    <>
      <div className="grid grid-cols-12 gap-4">
        <div className="lg:col-span-3 col-span-12">

        <div className=" relative overflow-hidden">
          <img className="rounded" src={BoxBanner} alt="BoxBanner" />
          <div className="inner-info  absolute w-96 p-6 left-0 text-left top-3">
            <p className="text-white my-2">Bacola Natural Foods</p>
            <h2 className="text-3xl font-thin mt-2">Special Organic</h2>
            <h2 className="text-3xl font-bold mt-2">Roats Burger</h2>
            <p className="mt-2">Only from</p>
            <h2 className="text-2xl text-red-900 font-bold mt-2">$14.99</h2>
          </div>
        </div>

        </div>

        <div className="lg:col-span-9 col-span-12">
        <div className="flex flex-row">
        <ShowProducts/>
          {/* {
            products.map( (pd) => <ShowProducts
              key={pd.id}
              pd={pd}
            />)
          } */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestSeller;
