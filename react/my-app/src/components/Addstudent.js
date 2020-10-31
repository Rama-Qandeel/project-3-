import React, { Component } from 'react'
import './App.css'
export default class Addstudent extends Component {
    render() {
        return (
            <div className="label">
                  <div className="style_label">
                    <label>Username : 
                   <input type="text" placeholder="New username"/>
                   </label> 
                   </div>
                   
                   <div className="style_label">
                   <label> Email : 
                   <input type="text" placeholder="New email"/>
                   </label>
                   </div>
                  
                   <div className="style_label">
                   <label> Password : 
                   <input type="text" placeholder="New password"/>
                   </label>
                   </div>
                  
                  
                   <div className="style_label">
                   <label> Class : 
                   <input type="text" placeholder="Class"/>
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


