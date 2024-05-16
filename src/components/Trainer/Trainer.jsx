import React from "react";
import "./Trainer.css";

export default function Trainer() {
  return (
    <div className="trainerWrapper">
      <div className="trainerContainer">
        <div className="trainerProduceContainer">
          <div className="trainerProduce">TRAINERS</div>
          <p className="trainerProducedesc">
            当ジムでは3名のプロフェッショナルなトレーナーが在籍しております。トレーニングはもちろん栄養面や普段の生活においてもご提案可能です。
          </p>
        </div>

        <div className="trainers">
          <div className="trainerAbout">
            <div className="trainerImg">
              <img src="/assets/mentrainer1.jpg" alt="" />
              <p className="trainerName">Smith</p>
            </div>
            <p className="trainerdesc">
              私はトレーニングの世界で15年以上の経験を持つパーソナルトレーナーです。
            </p>
            <div className="hidetext">
              <p className="trainerexplain">
                私のアプローチは、トレーニングや栄養指導だけでなく、クライアントのライフスタイル、目標、個々のニーズにも焦点を当てています。それぞれのクライアントに合わせたカスタマイズされたプログラムを提供し、健康的な体重管理、筋力トレーニング、ストレス管理などの領域での支援を行います。
              </p>
            </div>
          </div>

          <div className="trainerAbout">
            <div className="trainerImg">
              <img src="/assets/mentrainer2.jpg" alt="" />
              <p className="trainerName">John</p>
            </div>
            <p className="trainerdesc">
              私は常にクライアントの健康とフィットネスの目標を最優先に考えています。
            </p>
            <div className="hidetext">
              <p className="trainerexplain">
                トレーニングセッションは、効果的なエクササイズとポジティブなサポートが組み合わさり、クライアントが自信を持って進めるように導きます。栄養アドバイスや健康的な食事のプランも提供し、継続的な成長と健康的な生活を促進します。
              </p>
            </div>
          </div>

          <div className="trainerAbout">
            <div className="trainerImg">
              <img src="/assets/womentrainer.jpg" alt="" />
              <p className="trainerName">Alice</p>
            </div>
            <p className="trainerdesc">
              私のパーソナルトレーニングは、科学的根拠に基づいたアプローチと個別に調整されたプログラムに重点を置いています。
            </p>
            <div className="hidetext">
              <p className="trainerexplain">
                クライアントとの信頼関係を築き、彼らが自分の目標に向かって前進できるようにサポートします。また、柔軟性やストレッチング、リカバリーの重要性も教え、トレーニングプランの一部として取り入れます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
