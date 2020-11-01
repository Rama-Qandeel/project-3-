import React, { Component } from 'react'

export default class Deletestudent extends Component {
    constructor(props) {
        super(props);
        this.state ={
        studentdelete:''
            
      }
    }
  
    handleInputChange= (e) => {
        
        this.setState({studentdelete:e.target.value})
      };
    
     deleteUser=()=>{
        this.props.delete({email:this.state.studentdelete })
      }
    
    
      render() {
        return (
            <div>
                <button className="btn" onClick={this.deleteUser}>
              Delete Student
            </button>
            <input type="text" placeholder="email" onChange={this.handleInputChange} />
            </div>
        )
    }
}


