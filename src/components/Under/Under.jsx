import React from "react";
import "./Under.css";
import { SiOpenaigym } from "react-icons/si";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Under() {
  return (
    <div className="UnderWrapper">
      <div className="UnderContainer">
        <div className="UnderProducePart">
          <div className="UnderProducePartTop">
            <div className="UnderProducePartIcon" style={{ fontSize: "3em" }}>
              <SiOpenaigym />
            </div>
            <div className="UnderProducePartGymname">GYMENTIERS</div>
          </div>
          <p className="UnderProducePartMission">
            ジムは地域で最高のトレーニングとサポートを提供。コミュニティに愛される場所として成長し続けています。
          </p>
          <div className="UnderProducePartSnsicons">
            <div className="UnderProducePartSnsicon">
              <FacebookIcon />
            </div>
            <div className="UnderProducePartSnsicon">
              <XIcon />
            </div>
            <div className="UnderProducePartSnsicon">
              <PinterestIcon />
            </div>
            <div className="UnderProducePartSnsicon">
              <YouTubeIcon />
            </div>
          </div>
        </div>
        <div className="UnderOurservicePart">
          <div className="UnderOurservicePartClassTitle">Our Classes</div>
          <hr size="3" color="red" className="UnderHrTag" />
          <div className="UnderOurservicePartClasses">
            <div className="UnderOurservicePartClasse">Beginer</div>
            <div className="UnderOurservicePartClasse">Middle</div>
            <div className="UnderOurservicePartClasse">Challeng</div>
          </div>
        </div>
        <div className="UnderWorkinghoursPart">
          <div className="UnderWorkinghoursPartTitle">Working Hours</div>
          <hr size="3" color="red" className="UnderHrTag" />
          <div className="UnderWorkinghoursPartBox">
            <div className="UnderWorkinghoursPartday">Monday - Saturday</div>
            <div className="UnderWorkinghoursParttime">8:00am- 22:00pm</div>
          </div>
          <div className="UnderWorkinghoursPartBox">
            <div className="UnderWorkinghoursPartday">Holiyday</div>
            <div className="UnderWorkinghoursParttime">Sunday</div>
          </div>
        </div>
      </div>
    </div>
  );
}
