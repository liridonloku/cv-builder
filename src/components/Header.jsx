import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="no-print" style={headerStyle}>
        {this.props.title}
      </header>
    );
  }
}

const headerStyle = {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
  backgroundColor: "lightBlue",
  marginBottom: "15px",
};
