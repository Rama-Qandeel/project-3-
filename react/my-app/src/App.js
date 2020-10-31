import React, { Component } from 'react'
import './App.css';
import Students from "./components/Students"
import axios from "axios"


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     students:[]
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
  
  
  
  render() {
  return (
    <div className="App">
   
   <button onClick={this.getstudents}>get Students</button>
   <Students student={this.state.students}/>
    </div>
  );
}
}

