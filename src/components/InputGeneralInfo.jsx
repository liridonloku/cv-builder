import React, { Component } from "react";

export default class InputGeneralInfo extends Component {
  render() {
    return (
      <div>
        <h3 style={{ textAlign: "center" }}>General Info</h3>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "5px 15px",
            boxShadow: "0 0 3px black",
          }}
        >
          <div style={sectionStyle}>
            <label htmlFor="full-name" style={{ width: "120px" }}>
              Full Name:{" "}
            </label>
            <input
              type="text"
              name="full-name"
              id="full-name"
              style={{ flexGrow: "1" }}
              value={this.props.info.name}
              onChange={this.props.onNameChange}
            />
          </div>
          <div style={sectionStyle}>
            <label htmlFor="email" style={{ width: "120px" }}>
              Email address:{" "}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              style={{ flexGrow: "1" }}
              onChange={this.props.onEmailChange}
            />
          </div>
          <div style={sectionStyle}>
            <label htmlFor="phone" style={{ width: "120px" }}>
              Phone no.:{" "}
            </label>
            <input
              type="tel"
              pattern="(\+|00)[1-9][0-9 \-\(\)\.]{7,32}"
              style={{ flexGrow: "1" }}
              onChange={this.props.onPhoneChange}
            />
          </div>
          <div style={sectionStyle}>
            <label htmlFor="position" style={{ width: "120px" }}>
              Position:{" "}
            </label>
            <input
              type="text"
              name="position"
              id="position"
              style={{ flexGrow: "1" }}
              onChange={this.props.onPositionChange}
            />
          </div>
          <div style={sectionStyle}>
            <label htmlFor="description" style={{ width: "120px" }}>
              Description:{" "}
            </label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Add a short description of yourself (optional)"
              style={{ flexGrow: "1" }}
              onChange={this.props.onDescriptionChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

const sectionStyle = {
  display: "flex",
  margin: "5px 5px",
};
