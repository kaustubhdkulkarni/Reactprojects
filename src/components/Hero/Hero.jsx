import React from "react";
import "./hero.css";

import Header from "../Header/Header";
// importing images
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";

import {motion} from 'framer-motion' 
import NumberCounter from 'number-counter';

const Hero = () => {

  const transition ={type : 'spring',duration :3}
  const mobile = window.innerWidth<=768 ?true : false;
  return (
    <div className="hero" id='home'>

      <div className="blur blur-h"></div>


      <div className="left-h">
        <Header />
        {/* Best ADD  */}
        <div className="best-add">
          <motion.div
          initial = {{left : mobile ? "171px" : '238px'}}
          whileInView={{left : "8px"}}
          transition={{...transition, type: 'tween'}}>
            
          </motion.div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero heading  */}

        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
            
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we help you to shape and build your ideal body and live up
              your life to fullest
            </span>
          </div>
        </div>
        {/* heading ends here  */}

        {/* figures start here  */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start = {50} delay='4'preFix='+'/>
            </span>
            <span>Expert Coaches</span>
          </div>
          <div>
            <span>
            <NumberCounter end={978} start = {300} delay='4'preFix='+'/>
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span><NumberCounter end={50} start = {0} delay='4'preFix='+'/></span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* Hero button */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now </button>

        <motion.div className="heart-rate"
        initial={{right:"-1rem"}}
        whileInView={{right:'4rem'}}
        transition={transition}>
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span className="bpm">115 bpm</span>
        </motion.div>

        {/* Hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories div */}
        <div className="calories">
          <img src={calories} alt="" />
          <div>
          <span>Calories Burned</span>
          <span>220kcal</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Hero;
