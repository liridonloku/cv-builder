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
            data-id={job.id}
            defaultValue={job.location}
            style={{ flexGrow: "1" }}
            onChange={this.props.onLocationChange}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="firstYear" style={{ width: "120px" }}>
            From:{" "}
          </label>
          <input
            type="text"
            name="firstYear"
            data-id={job.id}
            defaultValue={job.firstYear}
            style={{ flexGrow: "1" }}
            onChange={this.props.onFirstYearChange}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="lastYear" style={{ width: "120px" }}>
            To:{" "}
          </label>
          <input
            type="text"
            name="lastYear"
            data-id={job.id}
            defaultValue={job.lastYear}
            style={{ flexGrow: "1" }}
            onChange={this.props.onLastYearChange}
          />
        </div>
        <div style={sectionStyle}>
          <label htmlFor="description" style={{ width: "120px" }}>
            Job Description:{" "}
          </label>
          <textarea
            type="text"
            name="description"
            data-id={job.id}
            defaultValue={job.description}
            style={{ flexGrow: "1", resize: "vertical" }}
            onChange={this.props.onJobDescriptionChange}
          />
        </div>
        <div style={sectionStyle}>
          <button
            style={{ width: "100%" }}
            data-id={job.id}
            onClick={this.props.removeJob}
          >
            Remove
          </button>
        </div>
      </form>
    ));
    return (
      <div className="no-print" style={{ margin: "15px 0" }}>
        <h3 style={{ textAlign: "center" }}>Experience</h3>
        {items}
        <div style={{ margin: "0 15px" }}>
          <button
            style={{ width: "100%", boxShadow: "0 0 3px black" }}
            onClick={this.props.addNewJob}
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
