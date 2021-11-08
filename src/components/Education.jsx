import React, { Component } from "react";
import EducationItem from "./EducationItem";

export class Education extends Component {
  render() {
    const items = this.props.education.map((education) => (
      <EducationItem education={education} />
    ));
    return <div style={educationStyle}>{items}</div>;
  }
}

const educationStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  margin: "5px 10px",
  border: "1px solid black",
};

export default Education;
