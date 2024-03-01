import React from "react";
import "./Contact.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Topber from "../../components/Topber/Topber";
import Under from "../../components/Under/Under";
import Select from "react-select";

export default function Contact() {
  const options = [
    { value: "Begginers", label: "Begginers" },
    { value: "Middle", label: "Middle" },
    { value: "Challeng", label: "Challeng" },
  ];

  return (
    <div className="contactWrapper">
      <Topber />
      <div className="contactContainer">
        <div className="contactSamnailbar">
          <div className="contactSamnailImg">
            <img
              src="/assets/gym12.jpg"
              alt=""
              className="contactSamnailImg1"
            />
          </div>
          <div className="contactSamnailDesc">CONTACT</div>
        </div>
        <div className="contactUnderDescWrapper">
          <div className="contactleftContainer">
            <div className="contactTopTitledesc">
              <div className="contactTopdesc">We are here for help you!</div>
              <div className="contactTopdetail">
                At Gymentiers,we are didicated to helping you achieve the body
                of your dreams. Our expert trainers and nutiritionists will work
                with you to create a personalized fitness and nutrition plan
                that helps you reach your specific goals.
              </div>
            </div>
            <div className="contactUnderdescBox">
              <div className="contactUnderBoxies">
                <div className="contactUnderBoxiesTitle">
                  New York City, Usa
                </div>
                <hr size="3" color="red" className="UnderHrTagName" />
                <div className="contactUnderBoxiesDesc">
                  <p>85 briston Mint Street, London, E1 8LG USA</p>
                </div>
              </div>
              <div className="contactUnderBoxies">
                <div className="contactUnderBoxiesTitle">Opening Hours</div>
                <hr size="3" color="red" className="UnderHrTagName" />
                <div className="contactUnderBoxiesDesc">
                  <p>Mon to Sat: 7:30 am - 1:00pm</p>
                  <p>Mon to Sat: 7:30 am - 1:00pm</p>
                </div>
              </div>
              <div className="contactUnderBoxies">
                <div className="contactUnderBoxiesTitle">Information</div>
                <hr size="3" color="red" className="UnderHrTagName" />
                <div className="contactUnderBoxiesDesc">
                  <p>+81-123-456-789</p>
                  <p>gymentiers@gmail.com</p>
                </div>
              </div>
              <div className="contactUnderBoxies">
                <div className="contactUnderBoxiesTitle">Follow Us On</div>
                <hr size="3" color="red" className="UnderHrTagName" />
                <div className="contactUnderBoxiesDescSNS">
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
            </div>
          </div>
          <div className="contactRightContainer">
            <div className="contactRightTitle">Leave Us Your Info</div>
            <hr size="3" color="red" className="UnderHrTagName" />
            <div className="contactRightInput">
              <input
                type="text"
                className="contactRightInputbar"
                placeholder="Full Name"
                required
              />
              <input
                type="text"
                className="contactRightInputbar"
                placeholder="Email Address"
                required
              />
              <Select
                isMulti
                options={options}
                placeholder="Select Detail"
                className="contactRightInputbarSelect"
              />
              <input
                type="text"
                className="contactRightInputbar"
                placeholder="Comment"
                required
              />
            </div>
            <button className="contactRightButton">Submit Now</button>
          </div>
        </div>
      </div>
      <Under />
    </div>
  );
}
