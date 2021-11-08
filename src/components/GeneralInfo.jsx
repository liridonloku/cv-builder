import React, { Component } from "react";

export class GeneralInfo extends Component {
  render() {
    return (
      <div style={generalInfoStyle}>
        <h3>Full name: {this.props.info.name}</h3>
        <p>email: {this.props.info.email}</p>
        <p>phone no.: {this.props.info.phone}</p>
      </div>
    );
  }
}

const generalInfoStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  margin: "5px 10px",
  border: "1px solid black",
};

export default GeneralInfo;
