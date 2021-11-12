import React, { Component } from "react";

export class ExperienceItem extends Component {
  render() {
    return (
      <div className="experience-item">
        <p style={yearsStyle}>
          {this.props.job.firstYear} - {this.props.job.lastYear}
        </p>
        <p style={{ fontWeight: "bold", margin: "5px 0" }}>
          {this.props.job.position} - {this.props.job.company},{" "}
          {this.props.job.location}
        </p>
        <p>{this.props.job.description}</p>
      </div>
    );
  }
}

const yearsStyle = {
  color: "blue",
};

export default ExperienceItem;
