import React from "react";
import { useState } from "react";
import css from "./coin.css";

const Coin = ({ name, price, image, priceChange }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="coin-container    hidden-mobile  ">
      <div className="coin-1">
        <div className="coin">
          <img src={image} alt="crypto" />
          <h2>{name}</h2>
        </div>
        <div className="coin-data">
          <p className="coin-price">Price:&nbsp;${price}</p>
          <div className="price-change">
            {priceChange < 0 ? (
              <p className="red text-red-700 !important ">
                &darr;{priceChange.toFixed(2)}%
              </p>
            ) : (
              <p className="green text-green-700 !important ">
                &uarr;{priceChange.toFixed(2)}%
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coin;
