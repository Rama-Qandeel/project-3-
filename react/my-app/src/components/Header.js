import React, { Component } from 'react'
import "./App.css"
import { Link} from "react-router-dom"
export class Header extends Component {
    render() {
        return (
            <div>
                <header className="header">
               <nav>
            <ul className="main-nav">
              <li>
                <Link className="link" to="/">Home</Link>
              </li>
              
              {'    '}
              <li>
                <Link className="link" to="/about">About</Link>
              </li>
             
              {'   '}
              <li>
                <Link className="link" to="/information">Information</Link>
              </li>
              {'   '}
              <li>
                <Link className="link" to="/contactus">Contact</Link>
              </li>
              {'    '}
              <li>
                <Link className="link" to="/reg">Register</Link>
              </li>
            </ul>
       </nav>
                </header>
            </div>
        )
    }
}

export default Header
