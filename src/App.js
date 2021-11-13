import React, { Component } from "react";
import Header from "./components/Header";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

export default class App extends Component {
  state = {
    generalInfo: {
      name: "donX",
      email: "donX@don.com",
      phone: "+123456789",
      position: "Software Engineer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec nisl porta, mollis eros venenatis, semper eros. Donec sed justo orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
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
        lastYear: 2011,
      },
    ],
    experience: [
      {
        company: "Google",
        location: "Mountain View, CA",
        position: "CTO",
        firstYear: 2017,
        lastYear: 2020,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec nisl porta, mollis eros venenatis, semper eros. Donec sed justo orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
      {
        company: "Amazon",
        position: "Developer",
        location: "Seattle, WA",
        firstYear: 2014,
        lastYear: 2017,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec nisl porta, mollis eros venenatis, semper eros. Donec sed justo orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      },
    ],
  };
  render() {
    return (
      <div>
        <Header title="CV Maker" />
        <GeneralInfo info={this.state.generalInfo} />
        <Experience experience={this.state.experience} />
        <Education education={this.state.education} />
      </div>
    );
  }
}
