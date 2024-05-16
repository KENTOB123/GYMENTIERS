import { Link } from "react-router-dom";
import Humberger from "../Humberger/Humberger";
import { SiOpenaigym } from "react-icons/si";
import "./MobileHeder.css";

const MobileHeder = () => {
  return (
    <div className="MobileHederContainer">
      <div className="MobileHederWrapper">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <div className="MobileHederIcon">
            <SiOpenaigym />
          </div>
          <div className="MobileHederDesc">GYMENTIERS</div>
        </Link>
      </div>
      <div className="mobilehederz">
        <Humberger />
      </div>
    </div>
  );
};

export default MobileHeder;
