import React from 'react';
import "./Apeal.css";
import Slideshow from '../Slideshow/Slideshow';
import HistoryToggleOffIcon from '@mui/icons-material/HistoryToggleOff';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Trainer from '../Trainer/Trainer';

export default function Apeal() {
  return (
    <div className='ApealWrapper'>
      <div className="slideshow">
        <div className="apealImg">
        <Slideshow />
       </div>
       <div className="serviceContainer">
        <div className="serviceWrapper">
          <div className="serviceDesc">
            <div className="serviceTitle">
              <div className='serveceIcon'>
                <HistoryToggleOffIcon style={{fontSize: "50px"}} />
              </div>
               <p class='serviceTi'>Planning</p>
            <p class='serviceAs'>当ジムでは、個々の目標に合わせたカスタマイズされたトレーニング計画を提供します。専門家の指導のもと、効果的な方法で健康的な生活を追求しましょう。</p>
            </div>
          </div>
          <div className="serviceDesc">
            <div className="serviceTitle">
            <div className='serveceIcon'>
              <FitnessCenterIcon style={{fontSize: "50px"}}/>
              </div>
            <p class='serviceTi'>trainning</p>
            <p class='serviceAs'>専属トレーナーが、あなたの目標に合わせたトレーニングプログラムを提供します。効果的なエクササイズと栄養アドバイスを組み合わせ、最高の結果を目指します。</p>
            </div>
          </div>
          <div className="serviceDesc">
            <div className="serviceTitle">
            <div className='serveceIcon'>
              <LocalDiningIcon style={{fontSize: "50px"}}/>
              </div>
            <p class='serviceTi'>nutrition</p>
            <p class='serviceAs'>健康的な食事はトレーニングの一部です。栄養バランスに優れた食事プランで、より良いライフスタイルを築きましょう。</p>
            </div>
          </div>
        </div>
       </div>
       {/* <div className="trainerContainerBox">
        <Trainer />
       </div> */}
      </div>
    </div>
  )
}
