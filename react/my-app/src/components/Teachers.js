import React, { Component } from 'react'

export default class Teachers extends Component {
    render() {
       
   const teachers= this.props.teachers.map((teacher,i)=>{
   return <p> {i+1}-{teacher.username}</p>
    })
       
        return (
            
            
            <div>
               {teachers}
            </div>
        )
    }
}