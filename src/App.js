import React, { Component } from "react";
import Header from "./components/Header";
import InputGeneralInfo from "./components/InputGeneralInfo";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
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
          id: "0",
        },
        {
          schoolName: "High School",
          title: "Student",
          firstYear: 2008,
          lastYear: 2011,
          id: "1",
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
          id: "2",
        },
        {
          company: "Amazon",
          position: "Developer",
          location: "Seattle, WA",
          firstYear: 2014,
          lastYear: 2017,
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec nisl porta, mollis eros venenatis, semper eros. Donec sed justo orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
          id: "3",
        },
      ],
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onPositionChange = this.onPositionChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
  }

  onNameChange = (e) => {
    this.setState({
      generalInfo: {
        name: e.target.value,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone,
        position: this.state.generalInfo.position,
        description: this.state.generalInfo.description,
      },
    });
  };

  onEmailChange = (e) => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: e.target.value,
        phone: this.state.generalInfo.phone,
        position: this.state.generalInfo.position,
        description: this.state.generalInfo.description,
      },
    });
  };

  onPhoneChange = (e) => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: e.target.value,
        position: this.state.generalInfo.position,
        description: this.state.generalInfo.description,
      },
    });
  };

  onPositionChange = (e) => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone,
        position: e.target.value,
        description: this.state.generalInfo.description,
      },
    });
  };

  onDescriptionChange = (e) => {
    this.setState({
      generalInfo: {
        name: this.state.generalInfo.name,
        email: this.state.generalInfo.email,
        phone: this.state.generalInfo.phone,
        position: this.state.generalInfo.position,
        description: e.target.value,
      },
    });
  };

  render() {
    return (
      <div>
        <Header title="CV Maker" />
        <div className="container">
          <InputGeneralInfo
            info={this.state.generalInfo}
            onNameChange={this.onNameChange}
            onEmailChange={this.onEmailChange}
            onPhoneChange={this.onPhoneChange}
            onPositionChange={this.onPositionChange}
            onDescriptionChange={this.onDescriptionChange}
          />
          <GeneralInfo info={this.state.generalInfo} />
          <Experience experience={this.state.experience} />
          <Education education={this.state.education} />
        </div>
      </div>
    );
  }
}
