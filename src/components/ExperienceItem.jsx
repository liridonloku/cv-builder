import React, { Component } from "react";

export class ExperienceItem extends Component {
  render() {
    return (
      <div>
        <p style={yearsStyle}>
          {this.props.job.firstYear} - {this.props.job.lastYear}
        </p>
        <p>{this.props.job.company}</p>
        <p>{this.props.job.position}</p>
        <p>{this.props.job.description}</p>
      </div>
    );
  }
}

const yearsStyle = {
  color: "blue",
};

export default ExperienceItem;
