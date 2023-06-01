import React from "react";
import "./plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

function Plans() {
  return (
    <div className="plan-container" id="plans">
      <div className="blur p-blur-1"></div>
      <div className="blur p-blur-2"></div>
      <div className="program-header" style={{ gap: "2rem" }}>
        <span className="stroke-text">Ready to start</span>
        <span>Your journey</span>
        <span className="stroke-text">With us</span>
      </div>

      {/* plans card */}
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>Rs.{plan.price}K</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="img" />
                  <span ket={i}>{feature}</span>
                </div>
              ))}
            </div>

            <div>
              <span>See mpre benifits -> </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
