import React from "react";
import { useState } from "react";
import css from "./coin.css";

const Coin = ({ name, price, image, priceChange }) => {
  const [show, setShow] = useState(true);
  return (
    <div
      className="coin-container 
    "
    >
      <div className="coin-1 flex flex-row items-center ">
        <div className="coin ">
          <img
            className=" flex "
            src={image}
            alt="crypto !important "
          />
          <h1 className=" coin-name  ">{name}</h1>
        </div>
        <div className="coin-data  ">
          <p className="coin-price ">
            Price:${price}
          </p>

          <div className="price-change  ">
            PriceChange:
            {priceChange < 0 ? (
              <p className=" red text-red-700 !important ">
                {priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className="   green text-green-700 !important ">
                {priceChange.toFixed(2)}%
              </p>
            )}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Coin;
