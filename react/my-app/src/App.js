import React, { Component } from "react";
// import bcrypt from "bcrypt"
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./App.css";
import Students from "./components/Students";
import Teachers from "./components/Teachers";
import axios from "axios";
import Header from "./components/Header";
import Addstudent from "./components/Addstudent";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      teachers: [],
      add: "true",
    };
  }

  getstudents = () => {
    axios
      .get("http://localhost:5000/protect")
      .then((response) => {
        this.setState({ students: response.data });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  getteachers = () => {
    axios
      .get("http://localhost:5000/protect/teachers")
      .then((response) => {
        this.setState({ teachers: response.data });
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  createNewItem = (newuser) => {
    // console.log('new : ', newuser.Username);
    const user = {
      username: newuser.username,
      email: newuser.email,
      password: newuser.password,
      class: newuser.class,
      roleid: newuser.roleid,
    };

    // console.log("user react : ", user);
    axios
      .post("http://localhost:5000/protect/creatuser", user)
      .then((response) => {
        console.log("user react : ", user);
        console.log("RESPONSE: ", response.data);
        const newArray = [...this.state.students];
        newArray.push(response.data);
        this.setState({ students: newArray });
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  deletestudent = () => {
    console.log("delete");
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Route exact path="/">
            <p>Welcome to our school</p>
          </Route>

          <Route path="/login">
            <button className="btn" onClick={this.getstudents}>
              Get Students
            </button>
            <button className="btn" onClick={this.addstudent}>
              Add Student
            </button>
            <button className="btn" onClick={this.deletestudent}>
              Delete Student
            </button>
            <input type="text" placeholder="email" />
            <Students student={this.state.students} />
            <button className="btn" onClick={this.getteachers}>
              Get Teachers
            </button>
            <button className="btn" onClick={this.addteacher}>
              Add Teacher
            </button>

            <Teachers teachers={this.state.teachers} />
            <Addstudent add={this.createNewItem} />
          </Route>

          <Route exact path="/contactus">
            <p>Send us a Message</p>
          </Route>
        </div>
      </Router>
    );
  }
}
