import './Skills.scss'
import content from '../../content';
import React from 'react';
const Skills = () => {
  return (
    <div className="skill-container">
      <div className="container p-5 mx-auto">
        <p className="heading">Skills</p>
        <div className='ms-5'>
          {
            content.skills.map(ele => (
              <React.Fragment key={ele.id}>
                <p className='mb-1 mt-4 ms-1 h5'>{ele.skill}</p>
                <div className="progress">
                  <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={ele.range} aria-valuemin="0" aria-valuemax="100" style={{ width: `${ele.range}%` }}>{ele.range}</div>
                </div>
              </React.Fragment>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skills;
