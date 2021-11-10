import React, { Component } from "react";

export class EducationItem extends Component {
  render() {
    return (
      <div>
        <p style={yearsStyle}>
          {this.props.education.firstYear} - {this.props.education.lastYear}
        </p>
        <p>{this.props.education.schoolName}</p>
        <p>{this.props.education.title}</p>
      </div>
    );
  }
}

const yearsStyle = {
  color: "blue",
};

export default EducationItem;
