import "./Topber.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { SiOpenaigym } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Topber() {
  return (
    <div className="topberContainer">
      <div className="topberLeft">
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <div className="topberIcon">
            <SiOpenaigym />
          </div>
          <div className="topberDesc">GYMENTIERS</div>
        </Link>
      </div>
      <div className="topberCenter">
        <div className="pageItems">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            <span className="clickbtn">Home</span>
          </Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>
            <span className="clickbtn">About</span>
          </Link>
          <Link
            to="/schedulle"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span className="clickbtn">Schedulle</span>
          </Link>
          <Link
            to="/facility"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span className="clickbtn">Facility</span>
          </Link>
          <Link to="/news" style={{ color: "white", textDecoration: "none" }}>
            <span className="clickbtn">Blog</span>
          </Link>
          <Link to="/price" style={{ color: "white", textDecoration: "none" }}>
            <span className="clickbtn">Price</span>
          </Link>
          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            <span className="clickbtn">Contact</span>
          </Link>
        </div>
      </div>
      <div className="topbarRight">
        <div className="snsIcons">
          <div className="snsIcon">
            <InstagramIcon style={{ fontSize: "40px" }} />
          </div>
          <div className="snsIcon">
            <FacebookIcon style={{ fontSize: "40px" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
