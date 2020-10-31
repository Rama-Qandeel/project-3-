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
import Addstudent from "./components/Addstudent"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     students:[],
     teachers:[],
     add:"true"
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
  
  addstudent=()=>{ 
    this.setState({add:"true"})
      
      }

 addteacher=()=>{
    
  }
  render() {
  
    {this.state.add ? (
      <Redirect to="/home" />
   ) : (
     <Redirect to="/login" />
   )}
  
  
  
    return (
    <Router>
    <div className="App">


      <Header/>

    < Route  exact path="/">
     
     <p>Welcome to our school</p>
     
     </Route>
   
   
   < Route path="/login">

   <button className="btn" onClick={this.getstudents}>Get Students</button>
   <button className="btn" onClick={this.addstudent}>Add Student</button>
    <Students student={this.state.students} />
    <button className="btn" onClick={this.getteachers}>Get Teachers</button>
    <button className="btn" onClick={this.addteacher} >Add Teacher</button>
   
   <Teachers teachers={this.state.teachers}/>
   <Addstudent/>
</Route>
{/* <Route path="/login">
            {this.state.add ? (
               <Redirect to="/" />
            ) : (
              <Redirect to="/login" />
            )}
          </Route> */}



< Route  exact path="/contactus">
     
     <p>Send us a Message</p>
     
     </Route>


    </div>
    </Router>
  );
}
}

