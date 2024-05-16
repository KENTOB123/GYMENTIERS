import React from "react";
import "./Gallery.css";

export default function Gallery() {
  return (
    <>
      <div className="galleryWrapper">
        <div className="galleryContainer">
          <div className="galleryTextBox">
            <div className="galleryTextTitle">Our Workplace Gallery</div>
            <p className="galleryTextDesc">
              当ジムはモダンな雰囲気をコンセプトに設計しております。器具は最新鋭のマシンを取り揃えております。心地よい環境で自己研鑽に励んでください
            </p>
          </div>
          <div className="galleryImgsBox">
            <div className="galleryImgs">
              <div className="item galleryImg">
                <img src="/assets/gym4.jpg" alt="" />
              </div>
              <div className="item galleryImg">
                <img src="/assets/gym5.jpg" alt="" />
              </div>
              <div className="item galleryImg">
                <img src="/assets/gym6.jpg" alt="" />
              </div>
              <div className="item galleryImg">
                <img src="/assets/gym7.jpg" alt="" />
              </div>
              <div className="item galleryImg">
                <img src="/assets/gym8.jpg" alt="" />
              </div>
              <div className="item galleryImg">
                <img src="/assets/gym9.jpg" alt="" />
              </div>
              <div className="item galleryImg">
                <img src="/assets/gym10.jpg" alt="" />
              </div>
              <div className="item galleryImg">
                <img src="/assets/gym11.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
