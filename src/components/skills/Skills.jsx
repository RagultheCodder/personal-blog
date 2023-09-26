import "./Skills.scss";
import content from "../../content";
import React, { Fragment } from "react";
const Skills = () => {
  return (
    <div className="skill-container">
      <div className="container p-5 mx-auto">
        <h1 className="heading text-center">Skills</h1>
        <div className="row mt-3 gy-3">
          {content.skills.map((ele) => (
            <Fragment key={ele.id}>
              <div className="col-xl-4 position-relative">
                <div className="border rounded p-5 glassEffect">
                  <h3 className="text-center mt-3">{ele.skill}</h3>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
