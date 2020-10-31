import React, { Component } from 'react'
import "./App.css"
export default class Teachers extends Component {
    constructor(props) {
        super(props);
        this.state = {
         teachers:[{id:"",
        username:'',
        material:'',
        email:''
        }]
      }
    }
   
   
   
    render() {
        let header = Object.keys(this.state.teachers[0])
    //    console.log('header : ',header);
   
     let key=header.map((key, index) => {
           return <th key={index}>{key.toUpperCase()}</th>
        })
    //  console.log('h : ',r);
     
   const teachers= this.props.teachers.map((teacher,i)=>{
   
    return (
       <tr key={teacher.id}>
           <td>{i+1}</td>
           <td>{teacher.username}</td>
         <td>{teacher.material}</td>
         <td>{teacher.email}</td>
           {/* <td>{teacher.roleid}</td> */}
       </tr>
   )
    })
 
        return (
            
            
            <div>
               <table id='students'>
               <tbody>
               <tr>{key}</tr>
                  {teachers}
               </tbody>
               </table>
            </div>
        )
    }
}