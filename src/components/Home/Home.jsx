import React from "react";
import "./Home.css";
import Apeal from "../Apeal/Apeal";
import Topber from "../Topber/Topber";
import Gallery from "../../pages/Gallery/Gallery";
import Trainer from "../Trainer/Trainer";
import Servise from "../Servise/Servise";
import Under from "../Under/Under";

export default function Home() {
  return (
    <>
      <Topber />
      <Apeal />
      <Trainer />
      <Gallery />
      {/* BMI計算機をおいても良さそう  */}
      <Servise />
      <Under />
    </>
  );
}
