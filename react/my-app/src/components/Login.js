import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state ={
    
          email:'',
            password:'',
        
    
      }
    }
    handleInputChangeemail= (e) => {
        
        this.setState({email:e.target.value})
      };
    
      handleInputChangeemailpass= (e) => {
            
        this.setState({password:e.target.value})
      };
    
      login=()=>{
this.props.login({email:this.state.email,
  password:this.state.password})

      }

    
    
    
    render() {
        return (
            <div>
              <input type="text" placeholder="email" onChange={this.handleInputChangeemail} />
          <input type="password" placeholder="password" onChange={this.handleInputChangeemailpass}/>
         <button onClick={this.login}>Login</button>  
            </div>
        )
    }
}

