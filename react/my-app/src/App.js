import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import './App.css';
import Students from "./components/Students"
import Teachers from "./components/Teachers"
import axios from "axios"
import Header from "./components/Header"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     students:[],
     teachers:[]
  }
}

  getstudents=()=>{
    axios.get("http://localhost:5000/protect")
    .then((response)=>{
      this.setState({students:response.data})
    })
    .catch((err)=>{
      console.log('err',err);
      
    })

  }
  getteachers=()=>{
    axios.get("http://localhost:5000/protect/teachers")
    .then((response)=>{
      this.setState({teachers:response.data})
    })
    .catch((err)=>{
      console.log('err',err);
      
    })

  }
  
  
  render() {
  return (
    <Router>
    <div className="App">


      <Header/>

    < Route  exact path="/">
     
     <p>Welcome to our school</p>
     
     </Route>
   
   
   < Route path="/login">

   <button className="btn" onClick={this.getstudents}>get Students</button>
    <Students student={this.state.students} />
    <button className="btn" onClick={this.getteachers}>get Teachers</button>
   <Teachers teachers={this.state.teachers}/>
</Route>

< Route  exact path="/contactus">
     
     <p>Send us a Message</p>
     
     </Route>


    </div>
    </Router>
  );
}
}

