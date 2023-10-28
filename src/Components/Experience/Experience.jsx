import React from "react";
import "./Experience.css";
const Experience = () => {
 

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" >2+</div>
        <span  >Years </span>
        <span>Experience As Web Devloper
        </span>
      </div>
      <div className="achievement">
        <div className="circle" >10+</div>
        <span  >Fully Functional </span>
        <span>Projects Devloped</span>
      </div>
      <div className="achievement">
        <div className="circle" >10+</div>
        <span  >FreeLancing Experience</span>
        <span>Work To Gain Skills</span>
      </div>
    </div>
  );
};

export default Experience;
