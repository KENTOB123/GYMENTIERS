import React from "react";
import "./Servise.css";

export default function Servise() {
  return (
    <div className="servicePlanWrapper">
      <div className="servicePlanContainer">
        <div className="serviceTextContainer">
          <div className="serviceSubtext">料金表</div>
          <div className="serviceTitleBox">Exlucive Pricing Plan </div>
          <div className="serviceDesc">
            当ジムでは通常のフリープランとは別にパーソナルトレーナーと一緒に励む個別プランもご用意しております。
          </div>
        </div>
        <div className="servicePersonalPlanContainer">
          <div className="servicePlanBox">
            <div className="servicePlanImgBox">
              <img
                src="/assets/plan1.jpg"
                alt=""
                className="div servicePlanImg"
              />
            </div>
            <div className="servicePlanTextBox">
              <p className="servicePlanName">Begginers</p>
              <div className="servicePlanCurrencyBox">
                <p className="servicePlanCurrencyMark">$</p>
                <p className="servicePlanCurrencyNum">39</p>
                <p className="servicePlanCurrencyPer">/月</p>
              </div>
              <div className="servicePlanDescs">
                <p className="servicePlanDesc">Free Hnad</p>
                <p className="servicePlanDesc">Gym Fittness</p>
                <p className="servicePlanDesc">Wheight Loss</p>
                <p className="servicePlanDesc">Personal Trainer</p>
                <p className="servicePlanDesc">Unlimited Water</p>
              </div>
              <button className="servicePlanCheck">PURCHASE NOW →</button>
            </div>
          </div>
          <div className="servicePlanBox">
            <div className="servicePlanImgBox">
              <img
                src="/assets/plan2.jpg"
                alt=""
                className="div servicePlanImg"
              />
            </div>
            <div className="servicePlanTextBox">
              <p className="servicePlanName">Middle</p>
              <div className="servicePlanCurrencyBox">
                <p className="servicePlanCurrencyMark">$</p>
                <p className="servicePlanCurrencyNum">39</p>
                <p className="servicePlanCurrencyPer">/月</p>
              </div>
              <div className="servicePlanDescs">
                <p className="servicePlanDesc">Free Hnad</p>
                <p className="servicePlanDesc">Gym Fittness</p>
                <p className="servicePlanDesc">Wheight Loss</p>
                <p className="servicePlanDesc">Personal Trainer</p>
                <p className="servicePlanDesc">Unlimited Water</p>
              </div>
              <button className="servicePlanCheck">PURCHASE NOW →</button>
            </div>
          </div>
          <div className="servicePlanBox">
            <div className="servicePlanImgBox">
              <img
                src="/assets/plan3.jpg"
                alt=""
                className="div servicePlanImg"
              />
            </div>
            <div className="servicePlanTextBox">
              <p className="servicePlanName">Challeng</p>
              <div className="servicePlanCurrencyBox">
                <p className="servicePlanCurrencyMark">$</p>
                <p className="servicePlanCurrencyNum">39</p>
                <p className="servicePlanCurrencyPer">/月</p>
              </div>
              <div className="servicePlanDescs">
                <p className="servicePlanDesc">Free Hnad</p>
                <p className="servicePlanDesc">Gym Fittness</p>
                <p className="servicePlanDesc">Wheight Loss</p>
                <p className="servicePlanDesc">Personal Trainer</p>
                <p className="servicePlanDesc">Unlimited Water</p>
              </div>
              <button className="servicePlanCheck">PURCHASE NOW →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
