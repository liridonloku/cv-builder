import React, { Component } from "react";

export class GeneralInfo extends Component {
  render() {
    return (
      <div style={generalInfoStyle}>
        <h3>{this.props.info.name}</h3>
        <p>{this.props.info.email}</p>
        <p>{this.props.info.phone}</p>
      </div>
    );
  }
}

const generalInfoStyle = {
  margin: "5px 10px",
  boxShadow: "0 0 3px gray",
};

export default GeneralInfo;
