import React, { Component } from "react";
import EducationItem from "./EducationItem";

export class Education extends Component {
  render() {
    const items = this.props.education.map((education) => (
      <EducationItem education={education} key={education.id} />
    ));
    if (items.length > 0) {
      return (
        <div style={educationStyle}>
          <div className="title">Education</div>
          {items}
        </div>
      );
    } else {
      return <div></div>;
    }
  }
}

const educationStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  margin: "5px 10px",
  paddingLeft: "5px",
};

export default Education;
