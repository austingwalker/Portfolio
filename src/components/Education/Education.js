import React from "react";
import "./Education.css";

const Education = props => (
 <div className="educationBox">
        <h2 className="educationTitle" ><strong>Education</strong></h2>
   <div className="schools">
            <p className="texas"><small><b>University of Texas at Austin</b>  <li>Web Development Certificate</li></small></p>
            
            <p className="txstate"><small><b>Texas State University</b>  <li>Bachelor of Science</li><li> Major in Geography</li><li> Minor in History</li> </small></p>
            
            <p className="tt"><small><b>Texas Tech University</b>  <li>Undergraduate work</li></small></p>
   </div>
</div>
);

export default Education;