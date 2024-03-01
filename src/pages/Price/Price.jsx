import React from "react";
import "./Price.css";
import Servise from "../../components/Servise/Servise";
import Under from "../../components/Under/Under";
import Topber from "../../components/Topber/Topber";

export default function Price() {
  return (
    <div className="productPriceWrapper">
      <Topber />
      <div className="productPriceContainer">
        <div className="productPriceThumb">
          <img
            src="/assets/priceThumb.jpg"
            alt=""
            className="productPriceThumbImg"
          />
          <div className="productPriceThumbText">Pricing</div>
        </div>
        <div className="productPricePlan2">
          <Servise />
          <Under />
        </div>
      </div>
    </div>
  );
}
