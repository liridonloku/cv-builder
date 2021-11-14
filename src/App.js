import React, { Component } from "react";
import Header from "./components/Header";
import InputGeneralInfo from "./components/InputGeneralInfo";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ExperienceInput from "./components/ExperienceInput";
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

  onPositionChangeExperience = (e) => {
    let newExperience = this.state.experience.map((job) => {
      if (e.target.getAttribute("data-id") === job.id) {
        job.position = e.target.value;
      }
      return job;
    });
    this.setState({
      experience: newExperience,
    });
  };

  onCompanyChange = (e) => {
    let newExperience = this.state.experience.map((job) => {
      if (e.target.getAttribute("data-id") === job.id) {
        job.company = e.target.value;
      }
      return job;
    });
    this.setState({
      experience: newExperience,
    });
  };

  onLocationChange = (e) => {
    let newExperience = this.state.experience.map((job) => {
      if (e.target.getAttribute("data-id") === job.id) {
        job.location = e.target.value;
      }
      return job;
    });
    this.setState({
      experience: newExperience,
    });
  };

  onFirstYearChange = (e) => {
    let newExperience = this.state.experience.map((job) => {
      if (e.target.getAttribute("data-id") === job.id) {
        job.firstYear = e.target.value;
      }
      return job;
    });
    this.setState({
      experience: newExperience,
    });
  };

  onLastYearChange = (e) => {
    let newExperience = this.state.experience.map((job) => {
      if (e.target.getAttribute("data-id") === job.id) {
        job.lastYear = e.target.value;
      }
      return job;
    });
    this.setState({
      experience: newExperience,
    });
  };

  onJobDescriptionChange = (e) => {
    let newExperience = this.state.experience.map((job) => {
      if (e.target.getAttribute("data-id") === job.id) {
        job.description = e.target.value;
      }
      return job;
    });
    this.setState({
      experience: newExperience,
    });
  };

  addNewJob = () => {
    this.setState({
      experience: [
        ...this.state.experience,
        {
          company: "",
          position: "",
          location: "",
          firstYear: "",
          lastYear: "",
          description: "",
          id: Math.floor(Math.random() * 10000000).toString(),
        },
      ],
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
          <ExperienceInput
            experience={this.state.experience}
            onPositionChange={this.onPositionChangeExperience}
            onCompanyChange={this.onCompanyChange}
            onLocationChange={this.onLocationChange}
            onFirstYearChange={this.onFirstYearChange}
            onLastYearChange={this.onLastYearChange}
            onJobDescriptionChange={this.onJobDescriptionChange}
            addNewJob={this.addNewJob}
          />
          <GeneralInfo info={this.state.generalInfo} />
          <Experience experience={this.state.experience} />
          <Education education={this.state.education} />
        </div>
      </div>
    );
  }
}
