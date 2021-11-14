import React, { Component } from "react";

export default class EducationInput extends Component {
  render() {
    const items = this.props.education.map((school) => (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px 15px",
          boxShadow: "0 0 3px black",
        }}
        key={school.id}
      >
        <div style={sectionStyle}>
          <label htmlFor="position" style={{ width: "120px" }}>
            Title:{" "}
          </label>
          <input
            type="text"
            name="title"
            data-id={school.id}
            defaultValue={school.title}
            style={{ flexGrow: "1" }}
            onChange={this.props.onTitleChange}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="school" style={{ width: "120px" }}>
            School:{" "}
          </label>
          <input
            type="text"
            name="school"
            data-id={school.id}
            defaultValue={school.schoolName}
            style={{ flexGrow: "1" }}
            onChange={this.props.onSchoolNameChange}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="firstYear" style={{ width: "120px" }}>
            From:{" "}
          </label>
          <input
            type="text"
            name="firstYear"
            data-id={school.id}
            defaultValue={school.firstYear}
            style={{ flexGrow: "1" }}
            onChange={this.props.onFirstSchoolYearChange}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="lastYear" style={{ width: "120px" }}>
            To:{" "}
          </label>
          <input
            type="text"
            name="lastYear"
            data-id={school.id}
            defaultValue={school.lastYear}
            style={{ flexGrow: "1" }}
            onChange={this.props.onLastSchoolYearChange}
          />
        </div>
        <div style={sectionStyle}>
          <button
            style={{ width: "100%" }}
            data-id={school.id}
            onClick={this.props.removeSchool}
          >
            Remove
          </button>
        </div>
      </form>
    ));
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Education</h3>
        {items}
        <div style={{ margin: "0 15px" }}>
          <button
            style={{ width: "100%", boxShadow: "0 0 3px black" }}
            onClick={this.props.addNewSchool}
          >
            Add
          </button>
        </div>
      </div>
    );
  }
}

const sectionStyle = {
  display: "flex",
  margin: "5px 5px",
};
