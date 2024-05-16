import MobileHeder from "../MobileHeder/MobileHeder";
import "./Header.css";
import Topber from "../../components/Topber/Topber";

export const Header = () => {
  return (
    <div>
      <div className="pcHeader">
        <Topber />
      </div>
      <div className="mobileHeader">
        <MobileHeder />
      </div>
    </div>
  );
};
