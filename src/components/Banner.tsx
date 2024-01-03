import * as React from "react";
import { Address } from "../types/Address";
import Cta from "./Cta";

export interface BannerProps {
  name?: string;
  address?: Address;
}

const renderPrettyAddress = (address?: Address) => {
  return (
    <>
      {address && (
        <span>
          {address.line1} in {address.city}, {address.region}
        </span>
      )}
    </>
  );
};

const Banner = (props: BannerProps) => {
  const { name, address } = props;

  return (
    <>
      <div
        className={`relative z-10 w-full bg-cover bg-center h-96 mt-80 bg-[url(/src/assets/images/berlinn.png)] `}
      >
        <div className="absolute left-0 right-0 flex flex-col items-center">
          <div className="w-96 my-8 rounded-xl mx-80 -mt-64 bg-amber-500 border-8 shadow-xl border-amber-600 px-4 py-2 text-center">
            <div>
              <h1 className="text-white text-3xl font-semibold">{name}</h1>
              <p className="text-lg pt-2 text-white font-semibold">
                {renderPrettyAddress(address)}
              </p>
            </div>
            <div className="flex py-3 justify-center items-center">
              <Cta
                buttonText="Get Direction"
                url="https://www.google.com/maps/place/?q=place_id:ChIJ6xAQxslRqEcRSrwUyIXY4Kk"
                style="text-orange bg-white"
              ></Cta>
              {/* <Cta
                buttonText="Order Delivery"
                url="#"
                style="text-orange bg-white"
              ></Cta> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
