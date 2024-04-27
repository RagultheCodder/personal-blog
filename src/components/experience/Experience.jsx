import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import content from "../../content";
import "./Experience.scss";

const Experience = () => {
  return (
    <>
      <h1 className="heading text-center"> Experience</h1>

      <VerticalTimeline
        animate={true}
        lineColor="#f3f3f3"
        layout="2-columns"
        className="mt-5"
      >
        {content.experience.map((exp) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentArrowStyle={{ borderRight: "7px solid green" }}
            date={exp.year}
            iconStyle={{ background: "#ffbc01", color: "#ffbc01" }}
          >
            <h5 className="vertical-timeline-element-title">{exp.job}</h5>
            <h5 className="vertical-timeline-element-subtitle">
              {exp.company}
            </h5>
            <p>{exp.project}</p>
            <ul className="mt-2">
              {exp.projectDescription.map((des) => (
                <li>{des.description}</li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </>
  );
};

export default Experience;
