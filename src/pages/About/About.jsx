import React from "react";
import "./About.css";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import CallMissedOutgoingIcon from "@mui/icons-material/CallMissedOutgoing";
import Topber from "../../components/Topber/Topber";
import Under from "../../components/Under/Under";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import MobileHeder from "../../components/MobileHeder/MobileHeder";

export default function About() {
  return (
    <div className="AboutWrapper">
      <div className="pcHeader">
        <Topber />
      </div>
      <div className="mobileHeader">
        <MobileHeder />
      </div>
      <div className="AboutContainer">
        <div className="AboutThumnail">
          <div className="AboutThumnailImg">
            <img
              src="/assets/AboutThumb.jpg"
              alt=""
              className="AboutThumnailImgone"
            />
          </div>
          <div className="AboutThumnailDesc">About Us</div>
        </div>
        <div className="AboutSubContainer">
          <div className="AboutWhoweareTextBoXContainer">
            <div className="AboutWhoweareTextBoXes">
              <div className="AboutWhoweareTextBox">Who we are</div>
              <div className="AboutWhoweareTextTiltle">
                We will give you sterength and helth
              </div>
              <div className="AboutWhoweareTextDesc">
                私たちは、健康と幸福を追求するすべての人々に、究極の自己実現と健康的なライフスタイルの実現を支援します。
              </div>
              <Link to="/contact">
                <button className="AboutWhoweareButton">CONTACT US →</button>
              </Link>
            </div>
            <div className="AboutWhoweareTextBoxImgs">
              <img
                src="/assets/About1.jpg"
                alt=""
                className="AboutWhoweareTextBoxImg"
              />
            </div>
          </div>
          <div className="AboutOurhistoryContainer">
            <div className="AboutOurhistoryBox">
              <div className="AboutOurhistoryTextImg">
                <SportsGymnasticsIcon
                  className="AboutOurhistoryImg"
                  style={{ color: "rgb(85, 83, 83)", fontSize: "5em" }}
                />
              </div>
              <div className="AboutOurhistoryTextBoxes">
                <div className="AboutOurhistoryTitle">Our History</div>
                <p className="AboutOurhistoryDesc">
                  創設以来、私たちは常に最高のトレーニングと施設を提供し、メンバーの健康と幸福に焦点を当てています。私たちは皆さんが目標を達成し、理想の自分になるためのサポートを続けます。
                </p>
              </div>
            </div>
            <div className="AboutOurhistoryBox">
              <img
                src="/assets/About2.jpg"
                alt=""
                className="AboutOurhistoryImgBox"
              />
            </div>
            <div className="AboutOurhistoryBox">
              <img
                src="/assets/About3.jpg"
                alt=""
                className="AboutOurhistoryImgBox"
              />
            </div>
            <div className="AboutOurhistoryBox">
              <div className="AboutOurhistoryTextImg">
                <CallMissedOutgoingIcon
                  className="AboutOurhistoryImg"
                  style={{ color: "rgb(85, 83, 83)", fontSize: "5em" }}
                />
              </div>
              <div className="AboutOurhistoryTextBoxes">
                <div className="AboutOurhistoryTitle">Our Mission</div>
                <p className="AboutOurhistoryDesc">
                  私たちは、メンバーが自己の目標に向かって成長し、健康的なライフスタイルを実現する手助けをします。共に、健康で活力ある生活を築くためのパートナーとして、常にそばにいます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Under />
    </div>
  );
}
