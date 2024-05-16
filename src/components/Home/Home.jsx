import React from "react";
import "./Home.css";
import Apeal from "../Apeal/Apeal";
import Gallery from "../../pages/Gallery/Gallery";
import Trainer from "../Trainer/Trainer";
import Servise from "../Servise/Servise";
import Under from "../Under/Under";
import { Header } from "../Header/Header";
import Thum from "../Thum/Thum";

export default function Home() {
  return (
    <>
      <div className="headerIndex">
        <Header />
      </div>
      <Thum />
      <Apeal />
      <Trainer />
      <Gallery />
      <Servise />
      <Under />
    </>
  );
}
