import React, { Component } from 'react'
import './App.css'
export default class Addstudent extends Component {
    constructor(props) {
        super(props);
        this.state ={
      
            username: '',
            email:'',
            password:'',
            class:'' ,
            roleid:''
    
      }
    }
      handleInputChange1 = (e) => {
        // console.log('EVENT: ',e.target.value)
      
        
        this.setState({username:e.target.value})
        
      };
    
    
      
      handleInputChange2 = (e) => {
        
        this.setState({email:e.target.value})
      };
    
      handleInputChange3 = (e) => {
        
        this.setState({password:e.target.value})
      };
    
    
      handleInputChange4 = (e) => {
       
        this.setState({class:e.target.value})
      };
      handleInputChange5 = (e) => {
       
        this.setState({roleid:e.target.value})
      };
      addNewUser=()=>{
        this.props.add({username:this.state.username,
            email:this.state.email,
            password:this.state.password,
            class:this.state.class,
            roleid:this.state.roleid
        })
      }






    
    render() {
        return (
            <div className="label">
                  <div className="style_label">
                    <label>Username : 
                   <input type="text" 
                   placeholder="New username"
                   onChange={this.handleInputChange1}
                   />
                   </label> 
                   </div>
                   
                   <div className="style_label">
                   <label> Email : 
                   <input type="text" 
                   placeholder="New email"
                   onChange={this.handleInputChange2}
                   />
                   
                   </label>
                   </div>
                  
                   <div className="style_label">
                   <label> Password : 
                   <input type="text" 
                   placeholder="New password"
                   onChange={this.handleInputChange3}
                   />
                   </label>
                   </div>
                  
                  
                   <div className="style_label">
                   <label> Class : 
                   <input type="text" 
                   placeholder="Class"
                   onChange={this.handleInputChange4}
                   />
                </label>
                   </div>
                  
                   <div className="style_label">
                   <label> RoleId : 
                   <input type="text" 
                   placeholder="RoleId"
                   onChange={this.handleInputChange5}
                   />
                   </label>
                   </div>
                   <button className="btnAdd" onClick={this.addNewUser}> Add</button>
            </div>
        )
    }
}


