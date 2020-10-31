import React, { Component } from 'react'

export default class Students extends Component {
    render() {
       
   const students= this.props.student.map((student)=>{
        return <p>{student.username}</p>
    })
       
        return (
            
            
            <div>
               {students}
            </div>
        )
    }
}

