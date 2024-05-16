import React from "react";
import "./Facility.css";
import Topber from "../../components/Topber/Topber";
import Under from "../../components/Under/Under";
import MobileHeder from "../../components/MobileHeder/MobileHeder";

export default function Facility() {
  return (
    <>
      <div className="facilityWrapper">
        <div className="pcHeader">
          <Topber />
        </div>
        <div className="mobileHeader">
          <MobileHeder />
        </div>
        <div className="facilityContainer">
          <div className="facilityThambnail">
            <img
              src="/assets/gymmen.jpg"
              alt=""
              className="facilityThambnailImg"
            />
            <p className="facilityThambnailImgDesc">Facility</p>
          </div>
          <div className="facilityDescContainer">
            <div className="facilityEntranceContainer">
              <div className="facilityEntrance">Entrance Lounge</div>
              <p className="facilityEntranceDesc">
                石素材の壁に、光柱と水のアトラクションで落ち着いた雰囲気のエントランス。
              </p>
              <p className="facilityEntranceDesc">
                ラウンジも居心地よくゆったりとおくつろぎいただける空間。
              </p>
              <div className="facilityEntranceGallerys">
                <div className="facilityEntranceGallery">
                  <img
                    src="/assets/Entrance1.jpg"
                    alt=""
                    className="facilityEntranceGalleryImg"
                  />
                </div>
                <div className="facilityEntranceGallery">
                  <img
                    src="/assets/Entrance2.jpg"
                    alt=""
                    className="facilityEntranceGalleryImg"
                  />
                </div>
                <div className="facilityEntranceGallery">
                  <img
                    src="/assets/Entrance3.jpg"
                    alt=""
                    className="facilityEntranceGalleryImg"
                  />
                </div>
              </div>
            </div>
            <div className="facilityFitnessContainer">
              <div className="facilityFitness">Fitness</div>
              <p className="facilityFitnessDesc">
                多種多様なマシンやトレーナーサポートにより、
              </p>
              <p className="facilityFitnessDesc">
                効果的なエクササイズで、最適なトレーニングをコーディネート。
              </p>
              <div className="facilityFitnessGallerys">
                <div className="facilityFitnessGallery">
                  <img
                    src="/assets/gym5.jpg"
                    alt=""
                    className="facilityFitnessGalleryImg"
                  />
                </div>
                <div className="facilityFitnessGallery">
                  <img
                    src="/assets/gym6.jpg"
                    alt=""
                    className="facilityFitnessGalleryImg"
                  />
                </div>
                <div className="facilityFitnessGallery">
                  <img
                    src="/assets/gym7.jpg"
                    alt=""
                    className="facilityFitnessGalleryImg"
                  />
                </div>
              </div>
            </div>
            <div className="facilityBathRelaxContainer">
              <div className="facilityBathRelax">Bath & Relax</div>
              <p className="facilityBathRelaxDesc">
                水溶性炭酸カルシウム成分が魅力の人工温泉（二股温泉®）、人工炭酸泉の他、
              </p>
              <p className="facilityBathRelaxDesc">
                ドライサウナ・スチームサウナ・冷浴槽などをご用意。
              </p>
              <div className="facilityBathRelaxGallerys">
                <div className="facilityBathRelaxGallery">
                  <img
                    src="/assets/spa1.jpg"
                    alt=""
                    className="facilityBathRelaxGalleryImg"
                  />
                </div>
                <div className="facilityBathRelaxGallery">
                  <img
                    src="/assets/spa2.jpg"
                    alt=""
                    className="facilityBathRelaxGalleryImg"
                  />
                </div>
                <div className="facilityBathRelaxGallery">
                  <img
                    src="/assets/spa3.jpg"
                    alt=""
                    className="facilityBathRelaxGalleryImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Under />
      </div>
    </>
  );
}
