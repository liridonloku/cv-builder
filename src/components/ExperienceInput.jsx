import React, { Component } from "react";

export default class ExperienceInput extends Component {
  render() {
    const items = this.props.experience.map((job) => (
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px 15px",
          boxShadow: "0 0 3px black",
        }}
        key={job.id}
      >
        <div style={sectionStyle}>
          <label htmlFor="position" style={{ width: "120px" }}>
            Position:{" "}
          </label>
          <input
            type="text"
            name="position"
            data-id={job.id}
            defaultValue={job.position}
            style={{ flexGrow: "1" }}
            onChange={this.props.onPositionChange}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="company" style={{ width: "120px" }}>
            Company:{" "}
          </label>
          <input
            type="text"
            name="company"
            data-id={job.id}
            defaultValue={job.company}
            style={{ flexGrow: "1" }}
            onChange={this.props.onCompanyChange}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="location" style={{ width: "120px" }}>
            Location:{" "}
          </label>
          <input
            type="text"
            name="location"
            defaultValue={job.location}
            style={{ flexGrow: "1" }}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="firstYear" style={{ width: "120px" }}>
            From:{" "}
          </label>
          <input
            type="text"
            name="firstYear"
            defaultValue={job.firstYear}
            style={{ flexGrow: "1" }}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="lastYear" style={{ width: "120px" }}>
            To:{" "}
          </label>
          <input
            type="text"
            name="lastYear"
            defaultValue={job.lastYear}
            style={{ flexGrow: "1" }}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="description" style={{ width: "120px" }}>
            Job Description:{" "}
          </label>
          <textarea
            type="text"
            name="description"
            defaultValue={job.description}
            style={{ flexGrow: "1", resize: "vertical" }}
          />
        </div>
      </form>
    ));
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>Experience</h3>
        {items}
      </div>
    );
  }
}

const sectionStyle = {
  display: "flex",
  margin: "5px 5px",
};
