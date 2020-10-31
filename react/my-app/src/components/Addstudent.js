import React, { Component } from 'react'
import './App.css'
export default class Addstudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            Email:'',
            Password:'',
            Class:'' 
        };
      }
    
      handleInputChange1 = (e) => {
        // console.log('EVENT: ',e.target.value)
        this.setState({Username:e.target.value})
        
      };
    
    
      
      handleInputChange2 = (e) => {
        
        this.setState({Email:e.target.value})
      };
    
      handleInputChange3 = (e) => {
        
        this.setState({Password:e.target.value})
      };
    
    
      handleInputChange4 = (e) => {
       
        this.setState({Class:e.target.value})
      };
    
    
    
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
                   <input type="text" placeholder="RoleId"/>
                   </label>
                   </div>
                   <button className="btnAdd"> Add</button>
            </div>
        )
    }
}

