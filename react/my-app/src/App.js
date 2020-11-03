import React, { Component } from "react";
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
import Deletestudent from "./components/Deletestudent"
import Login from "./components/Login"
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
      teachers: [],
      islogin:false
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
    axios
      .post("http://localhost:5000/protect/creatuser", newuser)
      .then((response) => {
        // console.log("RESPONSE: ", response.data);
        this.setState({students:[...this.state.students,response.data]})
      alert("success create new user")
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };
  deletestudent = (userdelete) => {
    // console.log("user react : ", user);

    axios
      .delete("http://localhost:5000/protect/deleteuser",userdelete)
      .then((response) => {
        console.log("user react : ", userdelete);
        console.log("RESPONSE: ", response);
        const student = [...this.state.students];

      const newstudents=student.filter((user)=>{
          return user.email !==userdelete.email
       })
            this.setState({ students:newstudents})
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
  };

  

  login=(user)=>{
    console.log('info : ',user);

  axios
      .post("http://localhost:5000/login",user)
      .then((response) => {
        console.log("RESPONSE: ", response.data);
     if(response.data==="Invalid login check your email"){
      alert("Invalid login check your email")
      }
     else if( response.data==="Invalid login check your password"){
        alert("Invalid login check your password")
         }
         else{
          this.setState({islogin:true})
         }
      })
      .catch((err) => {
        console.log("ERR: ", err);
      });
    
  }
  signup=()=>{
this.setState({islogin:false})
  }




  render() {
   
    
    
    
    return (
      <Router>
        <div className="App">
        {this.state.islogin? 
       (<Redirect to="/information"/>):(<Redirect to="/reg"/>)}
  
         
          <Header />

          <Route exact path="/">
            <p>Welcome to our school</p>
          </Route>


          {/* <Route
            
            path="/add"
            render={(props) => 
            (<React.Fragment> 
              
               <Addstudent {...props} add={this.createNewItem} />
            </React.Fragment>)
             }
          /> */}
<Route
            exact
            path="/add"
            render={(props) => <Addstudent {...props} add={this.createNewItem} />}
          />
          {/* <Route path="/add">
          
          <Addstudent add={this.createNewItem} />
          </Route> */}




          <Route path="/information">
          {this.state.islogin?(<div>
           
           <button className="btn" onClick={this.getstudents}>
             Get Students
           </button>
           <Link className="link" to="/add">
           <button className="btn" onClick={this.addstudent}>
             Add Student
           </button>
           </Link>
           < Deletestudent delete={this.deletestudent}/>
           <button onClick={this.signup}>sign up</button>  
           <Students student={this.state.students} />
           <button className="btn" onClick={this.getteachers}>
             Get Teachers
           </button>
           <button className="btn" onClick={this.addteacher}>
             Add Teacher
           </button>

          
         <Teachers teachers={this.state.teachers} />
          
       </div>
          
          
          ):( <Redirect to="/reg"/>)}
            </Route> 
          
           
          <Route exact path="/contactus">
            <p>Send us a Message</p>
          </Route>


          <Route exact path="/reg">
          
          < Login login={this.login}/>
          </Route>


          
        </div>
      </Router>
    );
  }
}
