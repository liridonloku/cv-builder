import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";

export class Experience extends Component {
  render() {
    const items = this.props.experience.map((job) => (
      <ExperienceItem job={job} key={job.id} />
    ));
    if (items.length > 0) {
      return (
        <div style={experienceStyle}>
          <div className="title">Experience</div>
          {items}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const experienceStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  margin: "20px 10px",
  paddingLeft: "5px",
};

export default Experience;
