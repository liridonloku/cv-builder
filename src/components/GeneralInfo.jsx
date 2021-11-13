import React, { Component } from "react";

export class GeneralInfo extends Component {
  render() {
    return (
      <div style={generalInfoStyle}>
        <h3>{this.props.info.name}</h3>
        <p>email: {this.props.info.email}</p>
        <p>phone no.: {this.props.info.phone}</p>
        <p>{this.props.info.position}</p>
        <p>{this.props.info.description}</p>
      </div>
    );
  }
}

const generalInfoStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "5px",
  margin: "5px 10px",
  paddingLeft: "5px",
  marginBottom: "15px",
  borderBottom: "1px solid black",
};

export default GeneralInfo;
