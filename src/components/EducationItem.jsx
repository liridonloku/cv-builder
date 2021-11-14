import React, { Component } from "react";

export class EducationItem extends Component {
  render() {
    return (
      <div className="education-item">
        <ul style={{ paddingLeft: "15px" }}>
          <li style={yearsStyle}>
            {this.props.education.firstYear} - {this.props.education.lastYear}
          </li>
          <li style={{ fontWeight: "bold" }}>
            {this.props.education.schoolName}
          </li>
          <li>{this.props.education.title}</li>
        </ul>
      </div>
    );
  }
}

const yearsStyle = {
  color: "blue",
};

export default EducationItem;
