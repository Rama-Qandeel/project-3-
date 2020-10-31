import React, { Component } from 'react'

export default class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
         students:[{id:"",
        username:'',
        class:'',
        email:''
        }]
      }
    }
  
  
    render() {
        let header = Object.keys(this.state.students[0])
        let key=header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
         })


   const students= this.props.student.map((student,i)=>{
        return ( <tr key={student.id}>
            <td>{i+1}</td>
            <td>{student.username}</td>
          <td>{student.class}</td>
          <td>{student.email}</td>
            {/* <td>{teacher.roleid}</td> */}
        </tr>)
    })
       
        return (
            
            
            <div>
              <table id='students'>
               <tbody>
               <tr>{key}</tr>
                  {students}
               </tbody>
               </table>
            </div>
        )
    }
}

