import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SiOpenaigym } from "react-icons/si";
import "./Humberger.css";

const Humberger = () => {
  const [openMenu, setOpen] = useState(false);
  const handleMenuOpen = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button
        onClick={handleMenuOpen}
        type="button"
        className="humbergerButton"
      >
        <div className={openMenu ? "humbergerOpenTop" : "HumbergerCloseTop"} />
        <div
          className={openMenu ? "HumbergerMiddle" : "HumbergerCloseMiddle"}
        />
        <div
          className={openMenu ? "humbergerOpenBottm" : "HumbergerCloseBottom"}
        />
      </button>
      <div className="navwraper">
        <nav className={openMenu ? "NavbarOpen" : "NavbarClose"}>
          <ul className="HumbergerMenu">
            <li>
              <Link to="/" className="underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/schedulle" className="underline">
                Schedulle
              </Link>
            </li>
            <li>
              <Link to="/facility" className="underline">
                Facility
              </Link>
            </li>
            <li>
              <Link to="/news" className="underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/price" className="underline">
                Price
              </Link>
            </li>
            <li>
              <Link to="/contact" className="underline">
                Contact
              </Link>
            </li>
            <li>
              <div className="gymIconclass">
                <Link to="/" style={{ color: "black", textDecoration: "none" }}>
                  <div className="topberIcon">
                    <SiOpenaigym />
                  </div>
                  <div className="topberDesc">GYMENTIERS</div>
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Humberger;
