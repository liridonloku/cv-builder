import React, { Component } from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import "./App.css";

export default class App extends Component {
  state = {
    generalInfo: {
      name: "donX",
      email: "donX@don.com",
      phone: "+123456789",
    },
    education: [
      {
        schoolName: "MIT",
        title: "Software Engineering",
        firstYear: 2011,
        lastYear: 2014,
      },
      {
        schoolName: "High School",
        title: "Student",
        firstYear: 2008,
        lastYear: 2010,
      },
    ],
    experience: [
      {
        company: "Google",
        position: "CTO",
        firstYear: 2017,
        lastYear: 2020,
      },
      {
        company: "Amazon",
        position: "Developer",
        firstYear: 2014,
        lastYear: 2017,
      },
    ],
  };
  render() {
    return (
      <div>
        <Header title="CV Maker" />
        <GeneralInfo info={this.state.generalInfo} />
        <Education education={this.state.education} />
      </div>
    );
  }
}
