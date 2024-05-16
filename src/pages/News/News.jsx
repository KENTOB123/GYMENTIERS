import React from "react";
import "./News.css";
import Topber from "../../components/Topber/Topber";
import Under from "../../components/Under/Under";
import MobileHeder from "../../components/MobileHeder/MobileHeder";

export default function News() {
  return (
    <div className="newsWrapper">
      <div className="pcHeader">
        <Topber />
      </div>
      <div className="mobileHeader">
        <MobileHeder />
      </div>
      <div className="newsThamnailbox">
        <img src="/assets/gym3.jpg" alt="" />
        <div className="newsThamnailtitlebox">Blog</div>
      </div>
      <div className="newsContainer">
        <div className="newsMainleftContainer">
          <div className="newsMainleftblog">
            <img src="/assets/gym5.jpg" alt="" />
            <div className="newsMainleftblogday">March 11 ,2022</div>
            <div className="newsMainleftblogtitle">What is Yoga?</div>
            <div className="newsMainleftblogdesc">
              新年にヨガを始めることをお勧めします。ヨガは身体と心の健康を促進し、ストレスを軽減します。呼吸法とポーズの組み合わせは、心を落ち着かせ、集中力を高めます。柔軟性を向上させ、姿勢を改善し、筋力を増強します。自己発見と内なる平和を求める旅に出る準備を整えましょう。
            </div>
            <button className="newsContainerbutton">purchase now →</button>
          </div>
          <div className="newsMainleftblog">
            <img src="/assets/gym6.jpg" alt="" />
            <div className="newsMainleftblogday">March 11 ,2022</div>
            <div className="newsMainleftblogtitle">
              Yoga for everyone in 2023
            </div>
            <div className="newsMainleftblogdesc">
              今年こそヨガを始めましょう。ヨガは日常生活のストレスから解放されるための完璧な方法です。瞑想とポーズは心と体のバランスを整え、心の平穏をもたらします。柔軟性や筋力を向上させ、姿勢を改善します。この新しい年に、自己ケアと健康を優先し、ヨガの恩恵を受けましょう。
            </div>
            <button className="newsContainerbutton">purchase now →</button>
          </div>
        </div>
        <div className="newsMainRightContainer">
          <div className="newsMainRightCategories">
            <div className="newsMainRightCategorieTitle">Categories</div>
            <div className="newsMainRightCategorieBox">
              <div className="newsMainRightCategorie">
                <p>BodyBuilding</p>
                <p>(4)</p>
              </div>
              <div className="newsMainRightCategorie">
                <p>Boxing</p>
                <p>(4)</p>
              </div>
              <div className="newsMainRightCategorie">
                <p>Crossfit</p>
                <p>(4)</p>
              </div>
              <div className="newsMainRightCategorie">
                <p>Fitness</p>
                <p>(4)</p>
              </div>
              <div className="newsMainRightCategorie">
                <p>Meditation</p>
                <p>(4)</p>
              </div>
              <div className="newsMainRightCategorie">
                <p>Yoga</p>
                <p>(4)</p>
              </div>
            </div>
          </div>
          <div className="newsMainRightRecentposts">
            <div className="newsMainRightRecentpostTitle">Recent Posts</div>
            <div className="newsMainRightRecentpostsBox">
              <div className="newsMainRightRecentpost">
                <img src="/assets/gym5.jpg" alt="" />
                <div className="newsMainRightbarDescbox">
                  <div className="newsMainRightRecentpostday">
                    March 22, 2022
                  </div>
                  <div className="newsMainRightRecentpostday">title</div>
                </div>
              </div>
              <div className="newsMainRightRecentpost">
                <img src="/assets/gym6.jpg" alt="" />
                <div className="newsMainRightbarDescbox">
                  <div className="newsMainRightRecentpostday">
                    March 20, 2022
                  </div>
                  <div className="newsMainRightRecentpostday">title</div>
                </div>
              </div>
              <div className="newsMainRightRecentpost">
                <img src="/assets/gym7.jpg" alt="" />
                <div className="newsMainRightbarDescbox">
                  <div className="newsMainRightRecentpostday">
                    March 19, 2022
                  </div>
                  <div className="newsMainRightRecentpostday">title</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Under />
    </div>
  );
}
