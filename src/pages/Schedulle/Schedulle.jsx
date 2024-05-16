import React from "react";
import "./Schedulle.css";
import Topber from "../../components/Topber/Topber";
import Under from "../../components/Under/Under";
import MobileHeder from "../../components/MobileHeder/MobileHeder";

export default function Schedulle() {
  return (
    <div className="schedulleWrapper">
      <div className="pcHeader">
        <Topber />
      </div>
      <div className="mobileHeader">
        <MobileHeder />
      </div>
      <div className="schedulleContainer">
        <div className="schedulleThemnailBox">
          <div className="schedulleThemnailImg">
            <img src="/assets/gym6.jpg" alt="" />
          </div>
          <div className="schedulleThemnaiilDesc">Schedule by Day</div>
        </div>
        <div className="schedulleMainContainer">
          <div className="scedulleDayofweekContainer">
            <li className="scedulleDayofweeklist">
              <ul>Monday</ul>
              <ul>Tuesday</ul>
              <ul>Wendnesday</ul>
              <ul>Thursday</ul>
              <ul>Friday</ul>
              <ul>Saturday</ul>
              <ul>Sunday</ul>
            </li>
          </div>
          <div className="scedulleSubcontainer">
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Class Name</div>
              <div className="scedulleSubcontainerBoxClassName">Fitness</div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Time</div>
              <div className="scedulleSubcontainerBoxClassName">
                9:00am - 10:00am
              </div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Trainer</div>
              <div className="scedulleSubcontainerBoxClassName">David</div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <button className="scedulleSubcontainerButton">Join Now</button>
            </div>
          </div>
          <div className="scedulleSubcontainer">
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Class Name</div>
              <div className="scedulleSubcontainerBoxClassName">Fitness</div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Time</div>
              <div className="scedulleSubcontainerBoxClassName">
                9:00am - 10:00am
              </div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Trainer</div>
              <div className="scedulleSubcontainerBoxClassName">David</div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <button className="scedulleSubcontainerButton">Join Now</button>
            </div>
          </div>
          <div className="scedulleSubcontainer">
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Class Name</div>
              <div className="scedulleSubcontainerBoxClassName">Fitness</div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Time</div>
              <div className="scedulleSubcontainerBoxClassName">
                9:00am - 10:00am
              </div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <div className="scedulleSubcontainerBoxClass">Trainer</div>
              <div className="scedulleSubcontainerBoxClassName">David</div>
            </div>
            <div className="scedulleSubcontainerBoxies">
              <button className="scedulleSubcontainerButton">Join Now</button>
            </div>
          </div>
        </div>
      </div>
      <Under />
    </div>
  );
}
