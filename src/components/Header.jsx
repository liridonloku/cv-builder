import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return <header style={headerStyle}>{this.props.title}</header>;
  }
}

const headerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  backgroundColor: "lightBlue",
};
