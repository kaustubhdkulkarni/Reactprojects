import React from "react";
import "./reason.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";

function Reason() {
  return (
    <div className="reasons" id="why_us">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>

        <div>
          <span className="stroke-text">Why</span>
          <span>Choose us?</span>
        </div>
        <div className="details-r">
          <div>
            <img src={tick} alt="" />
            <span>Over 50+ Expert coaches</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>Train smarter and faster than before</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 free program for new member</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>reliable Partners</span>
          </div>
        </div>

        <span
          style={{
            color: "var(--gray)",
            fontWeight: "bold",
          }}
        >
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="img" />
          <img src={adidas} alt="img" />
          <img src={nike} alt="img" />
        </div>
      </div>
    </div>
  );
}

export default Reason;
