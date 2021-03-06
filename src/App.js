import React, { Component } from "react";
import Header from "./components/Header";
import InputGeneralInfo from "./components/InputGeneralInfo";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ExperienceInput from "./components/ExperienceInput";
import EducationInput from "./components/EducationInput";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      generalInfo: {
        name: "",
        email: "",
        phone: "",
        position: "",
        description: "",
      },
      education: [],
      experience: [],
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

  removeJob = (e) => {
    e.preventDefault();
    let newExperience = this.state.experience.filter(
      (job) => e.target.getAttribute("data-id") !== job.id
    );
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

  onTitleChange = (e) => {
    let newEducation = this.state.education.map((school) => {
      if (e.target.getAttribute("data-id") === school.id) {
        school.title = e.target.value;
      }
      return school;
    });
    this.setState({
      education: newEducation,
    });
  };

  onFirstSchoolYearChange = (e) => {
    let newEducation = this.state.education.map((school) => {
      if (e.target.getAttribute("data-id") === school.id) {
        school.firstYear = e.target.value;
      }
      return school;
    });
    this.setState({
      education: newEducation,
    });
  };

  onLastSchoolYearChange = (e) => {
    let newEducation = this.state.education.map((school) => {
      if (e.target.getAttribute("data-id") === school.id) {
        school.lastYear = e.target.value;
      }
      return school;
    });
    this.setState({
      education: newEducation,
    });
  };

  onSchoolNameChange = (e) => {
    let newEducation = this.state.education.map((school) => {
      if (e.target.getAttribute("data-id") === school.id) {
        school.schoolName = e.target.value;
      }
      return school;
    });
    this.setState({
      education: newEducation,
    });
  };

  removeSchool = (e) => {
    e.preventDefault();
    let newEducation = this.state.education.filter(
      (school) => e.target.getAttribute("data-id") !== school.id
    );
    this.setState({
      education: newEducation,
    });
  };

  addNewSchool = () => {
    this.setState({
      education: [
        ...this.state.education,
        {
          schoolName: "",
          title: "",
          firstYear: "",
          lastYear: "",
          id: Math.floor(Math.random() * 10000000).toString(),
        },
      ],
    });
  };

  render() {
    return (
      <div>
        <Header title="CV Generator" />
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
            removeJob={this.removeJob}
          />
          <EducationInput
            education={this.state.education}
            onTitleChange={this.onTitleChange}
            onFirstSchoolYearChange={this.onFirstSchoolYearChange}
            onLastSchoolYearChange={this.onLastSchoolYearChange}
            onSchoolNameChange={this.onSchoolNameChange}
            removeSchool={this.removeSchool}
            addNewSchool={this.addNewSchool}
          />
          <div className="separator no-print">
            <p>
              Scroll down to preview the CV, or click the button to Print/Save
              as PDF.
            </p>
            <button onClick={window.print}>Print/Save as PDF</button>
          </div>
          <GeneralInfo info={this.state.generalInfo} />
          <Experience experience={this.state.experience} />
          <Education education={this.state.education} />
        </div>
      </div>
    );
  }
}
