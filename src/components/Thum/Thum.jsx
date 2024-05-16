import React from "react";
import "./Thum.css";

export default function Thum() {
  return (
    <div className="AboutWrapper">
      <div className="AboutContainer">
        <div className="AboutThumnail">
          <div className="AboutThumnailImg">
            <img
              src="/assets/gym11.jpg"
              alt=""
              className="AboutThumnailImgone"
            />
          </div>
          <div className="AboutThumnailDesc">GYMENTIERS</div>
        </div>
      </div>
    </div>
  );
}
