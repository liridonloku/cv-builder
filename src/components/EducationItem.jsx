import React, { Component } from "react";

export class EducationItem extends Component {
  render() {
    return (
      <div>
        <p>School name: {this.props.education.schoolName}</p>
        <p>Title: {this.props.education.title}</p>
        <p>Started on: {this.props.education.firstYear}</p>
        <p>Finished: {this.props.education.lastYear}</p>
      </div>
    );
  }
}

export default EducationItem;
